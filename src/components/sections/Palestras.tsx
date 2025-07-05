import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const Palestras: React.FC = () => {
  return (
    <Section id="palestras" className="bg-secondary-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/palestra.jpg"
            alt="Caroline Venas palestrando"
            className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
          />
        </div>

        <div>
          <SectionTitle
            title="Palestras"
            centered={false}
          />
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mt-4">
              Compartilho minha experiência clínica e paixão pela Psicanálise em palestras voltadas a diferentes públicos.
              Com linguagem acessível, abordo temas sobre saúde mental, relações e desenvolvimento pessoal.
            </p>
            <p className="mt-6">
              Cada palestra é construída de forma personalizada, respeitando as necessidades do grupo ou instituição,
              promovendo reflexão e diálogo sobre os desafios contemporâneos do viver.
            </p>
            <p className="mt-8">
              Entre em contato para saber mais sobre como levar uma conversa inspiradora e transformadora para o seu evento.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Palestras; 