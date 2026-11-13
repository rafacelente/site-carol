// Remembers where a visitor came from (Google Ads click IDs, UTM tags, referrer) and gives
// them a short lead code. The code goes into the WhatsApp message so Carol can match each
// conversation to its source; the attribution is sent to the lead sheet only when the
// visitor taps a WhatsApp button. Nothing personal is collected.

// Apps Script web app (/exec URL) that appends leads to Carol's sheet. Empty = disabled.
export const COLLECTOR_URL =
  'https://script.google.com/macros/s/AKfycbwoJjDeA0ifECBvwr9tyTgR0DmoUTSpAOgYfNYbN_wHZyQae9vjbPDb4yJyRh97ncaV/exec';

const ATTRIBUTION_KEY = 'cv_attribution';
const CODE_KEY = 'cv_lead_code';
const CLICK_ID_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
// No 0/O, 1/I/L, 2/Z, 5/S, 6/G, 8/B: easy to read back from a WhatsApp message.
const CODE_ALPHABET = 'ACDEFHJKMNPRTUVWXY3479';

type Attribution = {
  source: string;
  medium: string;
  campaign: string;
  term: string;
  matchtype: string;
  device: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  landing: string;
  referrer: string;
  ts: number;
};

let memoryCode: string | null = null;

function storage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function read(): Attribution | null {
  try {
    return JSON.parse(storage()?.getItem(ATTRIBUTION_KEY) ?? 'null');
  } catch {
    return null;
  }
}

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

// Call once on page load. The latest non-direct visit wins, except that a Google Ads click
// is kept for 90 days unless a newer ad click replaces it (matches Google's own attribution).
export function captureAttribution(): void {
  const params = new URLSearchParams(window.location.search);
  const get = (k: string) => params.get(k)?.slice(0, 300) ?? '';
  const referrer = document.referrer && hostOf(document.referrer) !== window.location.hostname ? document.referrer : '';
  const clickId = get('gclid') || get('gbraid') || get('wbraid');
  if (!clickId && !get('utm_source') && !referrer) return;

  const previous = read();
  if (!clickId && previous?.gclid && Date.now() - previous.ts < CLICK_ID_MAX_AGE_MS) return;

  const next: Attribution = {
    source: get('utm_source') || (clickId ? 'google' : hostOf(referrer)),
    medium: get('utm_medium') || (clickId ? 'cpc' : 'referral'),
    campaign: get('utm_campaign'),
    term: get('utm_term'),
    matchtype: get('matchtype'),
    device: get('device'),
    gclid: get('gclid'),
    gbraid: get('gbraid'),
    wbraid: get('wbraid'),
    landing: window.location.href.slice(0, 300),
    referrer: referrer.slice(0, 300),
    ts: Date.now(),
  };
  try {
    storage()?.setItem(ATTRIBUTION_KEY, JSON.stringify(next));
  } catch {
    // storage full or blocked: the lead is still sent, just without attribution
  }
}

export function getLeadCode(): string {
  const store = storage();
  let code = memoryCode ?? store?.getItem(CODE_KEY) ?? null;
  if (!code) {
    const bytes = crypto.getRandomValues(new Uint8Array(5));
    code = Array.from(bytes, (b) => CODE_ALPHABET[b % CODE_ALPHABET.length]).join('');
    try {
      store?.setItem(CODE_KEY, code);
    } catch {
      // keep it in memory for this page view
    }
  }
  memoryCode = code;
  return code;
}

// Fire-and-forget: a text/plain beacon needs no CORS preflight and survives the tab
// switching to WhatsApp.
export function sendLead(button: string): void {
  if (!COLLECTOR_URL) return;
  const body = JSON.stringify({
    ...(read() ?? { source: '(direct)', medium: '(none)', landing: window.location.href.slice(0, 300) }),
    code: getLeadCode(),
    button,
  });
  try {
    navigator.sendBeacon(COLLECTOR_URL, new Blob([body], { type: 'text/plain' }));
  } catch {
    // never block the WhatsApp link
  }
}
