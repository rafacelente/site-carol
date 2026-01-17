import React from 'react';
import Section from '../ui/Section';

const clinicalThemes = [
  {
    title: 'Ansiedade',
    description: 'Quando tudo parece rápido demais. Quando o corpo fala antes da palavra. Um espaço para desacelerar e compreender.',
  },
  {
    title: 'Luto e Perdas',
    description: 'Quando algo se rompe. Quando o mundo muda de forma. Um espaço para acolher o que dói e elaborar o que ficou.',
  },
  {
    title: 'Depressão/ Falta de sentido',
    description: 'Quando falta energia, cor ou direção. Um espaço protegido para escutar sua história e reencontrar movimento.',
  },
];

const Services: React.FC = () => {
  return (
    <Section id="psicologia-clinica" className="bg-secondary-200">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-12 text-center">
        Temas presentes no dia a dia clínico
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clinicalThemes.map((theme, index) => (
          <div 
            key={index} 
            className="bg-secondary-50 shadow-sm p-10 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-primary-900 mb-8">
              {theme.title}
            </h3>
            <p className="text-lg md:text-xl font-sans-serif text-primary-700 leading-relaxed">
              {theme.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;