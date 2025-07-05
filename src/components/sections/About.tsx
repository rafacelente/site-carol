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

          
          <div className="prose prose-lg max-w-none text-gray-700">

            <p className="mt-4">
              Sou Caroline Venas, Psicóloga Clínica. Com mais de 4 anos de experiência e orientação psicanalítica, dedico-me a acompanhar sua jornada de autoconhecimento.
            </p>

            <p className="mt-6">
              Valorizo a escuta atenta da sua história e a potência transformadora da palavra. Em um ambiente seguro e acolhedor, podemos juntos explorar as raízes de seus desafios, elaborar questões internas e construir um viver mais autêntico e com significado.
            </p>

            <p className="mt-8">
              Se você busca um processo terapêutico que valorize sua voz e promova um crescimento genuíno, convido você a conhecer meu trabalho.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;