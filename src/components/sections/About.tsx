import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const About: React.FC = () => {
  return (
    <Section id="sobre" className="bg-secondary-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="About.jpeg" 
            alt="Caroline Venas - Psicóloga" 
            className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        
        <div>
          <SectionTitle 
            title="Sobre Mim" 
            centered={false} 
          />

          
          <div className="prose prose-lg max-w-none text-primary-800 font-sans-serif">

            <p className="mt-4">
            Sou Caroline Venas, Psicóloga Clínica com orientação psicanalítica. 
            Há mais de 4 anos acompanho pessoas que buscam compreender com mais profundidade o que as atravessa, sejam dores, repetições, escolhas, silêncios e movimentos que precisam ser olhados com calma.
            </p>

            <p className="mt-6">
            Minha prática se apoia em uma escuta sensível, capaz de perceber tanto o que é dito quanto o que aparece nas entrelinhas.
Acredito no tempo da palavra e no espaço onde cada pessoa pode se ouvir e, pouco a pouco, transformar aquilo que limita, machuca  confunde e se repete.
            </p>

            <p className="mt-8">
            Um encontro cuidadoso onde a sua história ganha espaço para ser dita e elaborada a partir da sua experiência.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;