import { NavItem, TestimonialType, ServiceType, FAQType } from '../types';

export const navItems: NavItem[] = [
  {
    title: 'Início',
    href: '#inicio',
  },
  {
    title: 'Sobre',
    href: '#sobre',
  },
  {
    title: 'Psicologia Clínica',
    href: '#psicologia-clinica',
  },
  {
    title: 'Palestras',
    href: '#palestras',
  },
  {
    title: 'Depoimentos',
    href: '#depoimentos',
  },
  {
    title: 'FAQ',
    href: '#faq',
  },
  {
    title: 'Contato',
    href: '#contato',
  },
];

export const testimonials: TestimonialType[] = [
  {
    content: 'A terapia com Caroline transformou minha vida. Sua abordagem acolhedora e profissional me ajudou a superar momentos difíceis com mais clareza.',
    author: 'Mariana S.',
    role: 'Paciente há 2 anos',
  },
  {
    content: 'Caroline tem uma capacidade única de criar um ambiente seguro onde me sinto à vontade para compartilhar meus pensamentos mais profundos.',
    author: 'Rafael C.',
    role: 'Paciente há 1 ano',
  },
  {
    content: 'Depois de algumas sessões com Caroline, comecei a notar mudanças significativas na forma como lido com meus relacionamentos e desafios diários. Recomendo muito.',
    author: 'Juliana T.',
    role: 'Paciente há 6 meses',
  },
];

export const services: ServiceType[] = [
  {
    title: 'Análise Pessoal',
    description: 'Um espaço de escuta atenta e acolhedora, dedicado à exploração das suas questões mais íntimas, promovendo um mergulho profundo em seu autoconhecimento e a ressignificação de suas vivências',
    icon: 'heart',
  },
  {
    title: 'Terapia de Casal',
    description: 'Um convite ao casal para explorar a dinâmica da relação, a comunicação e os desafios, buscando construir compreensões mais profundas e fortalecer o laço afetivo.',
    icon: 'heart-handshake',
  },
  {
    title: 'Orientação Profissional',
    description: 'Auxílio na identificação de habilidades e interesses para guiar escolhas profissionais alinhadas com valores pessoais.',
    icon: 'briefcase',
  },
  {
    title: 'Compreendendo a Ansiedade',
    description: 'Um espaço para acolher e investigar as manifestações da ansiedade, buscando compreender suas origens e sentidos em sua vida, e encontrar caminhos para um viver mais sereno.',
    icon: 'brain',
  },
];

export const faqs: FAQType[] = [
  {
    question: 'Qual é a duração de uma sessão?',
    answer: 'As sessões têm duração de 50 minutos, realizadas semanalmente ou conforme necessidade individual.',
  },
  {
    question: 'Você atende por convênio?',
    answer: '90% dos meus pacientes possuem convênio, mas ainda assim optam por atendimento particular via reembolso. Nessa modalidade, você nos paga a sessão e com a nota fiscal que emitimos da consulta, pede a devolução deste valor ao plano de saúde.',
  },
  {
    question: 'Como funciona a terapia online?',
    answer: 'As sessões online acontecem por videoconferência, oferecendo a mesma qualidade do atendimento presencial, com a conveniência de poder ser realizada de qualquer lugar.',
  },
  {
    question: 'Quanto tempo dura um processo terapêutico?',
    answer: 'A duração varia conforme cada pessoa. A psicanálise respeita seu tempo interno, não impõe prazos. O processo avança à medida que o inconsciente se revela.',
  },
  {
    question: 'O que devo esperar da primeira sessão?',
    answer: 'Se você está aqui, é porque possivelmente algo não vai bem. Na primeira sessão, você pode colocar isso em palavras - e eu vou te ajudar a escutar o que elas realmente dizem.',
  },
];