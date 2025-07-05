import React from 'react';
import { Heart, HeartHandshake, Briefcase, Brain } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data';

const Services: React.FC = () => {
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'heart':
        return <Heart size={size} className="text-primary-600" />;
      case 'heart-handshake':
        return <HeartHandshake size={size} className="text-primary-600" />;
      case 'briefcase':
        return <Briefcase size={size} className="text-primary-600" />;
      case 'brain':
        return <Brain size={size} className="text-primary-600" />;
      default:
        return <Heart size={size} className="text-primary-600" />;
    }
  };

  return (
    <Section id="psicologia-clinica">
      <SectionTitle 
        title="Psicologia Clínica" 
        subtitle="Um convite à escuta e à palavra para um viver com mais significado."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-[1.02] border border-gray-100"
          >
            <div className="mb-4 p-3 bg-primary-50 inline-block rounded-full">
              {getIcon(service.icon, 28)}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-primary-800">Abordagem Psicanalítica</h3>
        <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
          Meu trabalho se baseia na Psicanálise, uma abordagem que valoriza a escuta do inconsciente. Através da sua fala singular, desvendamos caminhos para o autoconhecimento e a transformação.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h4 className="font-bold text-primary-700 mb-2">Escuta Analítica</h4>
            <p className="text-gray-600 text-sm">Ambiente acolhedor e confidencial para a livre expressão, onde o não dito ganha voz e novos sentidos.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h4 className="font-bold text-primary-700 mb-2">Processo Contínuo</h4>
            <p className="text-gray-600 text-sm">Jornada de autoconhecimento no seu ritmo, desvendando gradualmente os processos inconscientes.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h4 className="font-bold text-primary-700 mb-2">Singularidade</h4>
            <p className="text-gray-600 text-sm">Sua história é única. O processo analítico respeita sua singularidade, seu tempo e sua forma de narrar sua trajetória.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;