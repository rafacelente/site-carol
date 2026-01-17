import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const Palestras: React.FC = () => {
  return (
    <Section id="palestras" className="bg-secondary-300">
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
            title="Encontros e Conversas"
            centered={false}
          />
          <div className="prose prose-lg max-w-none text-primary-800 font-sans-serif">
            <p className="mt-4 text-primary-800 font-sans-serif">
            Compartilho minha experiência clínica em espaços destinados a diferentes públicos e instituições.
            </p>
            <p className="mt-2 text-primary-800 font-sans-serif">
            Com uma linguagem acessível, abordo temas relacionados à saúde mental, às relações e ao cuidado com a vida psíquica.
            </p>
            <p className="mt-2 text-primary-800 font-sans-serif">
            São encontros que promovem reflexão e diálogo, onde diferentes temas podem ser trabalhados conforme o contexto.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Palestras; 