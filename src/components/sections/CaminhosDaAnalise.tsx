import React from 'react';
import Section from '../ui/Section';

const caminhos = [
  {
    image: '/chair.jpg',
    title: 'O encontro clínico',
    description: 'Onde a palavra encontra espaço e acolhimento',
  },
  {
    image: '/candle.jpg',
    title: 'O tempo da análise',
    description: 'Processos que respeitam seu ritmo e a sua história',
  },
  {
    image: '/tea.jpg',
    title: 'Cuidar de si',
    description: 'Transformações que acontecem de dentro para fora',
  },
];

const CaminhosDaAnalise: React.FC = () => {
  return (
    <Section id="caminhos-da-analise" className="bg-secondary-50">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-12">
        Caminhos da análise
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caminhos.map((caminho, index) => (
          <div 
            key={index} 
            className="border border-primary-900 bg-secondary-50"
          >
            <div className="aspect-[4/3] overflow-hidden border-b border-primary-900">
              <img 
                src={caminho.image} 
                alt={caminho.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-serif text-primary-900 mb-4">
                {caminho.title}
              </h3>
            </div>
            <div className="border-t border-primary-900 p-6">
              <p className="text-base md:text-lg font-sans-serif text-primary-700 leading-relaxed">
                {caminho.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CaminhosDaAnalise;
