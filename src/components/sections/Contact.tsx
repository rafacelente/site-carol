import React, { useState } from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const offices = [
    {
      name: 'São Paulo',
      address: (
        <>
          Higienópolis<br />
          São Paulo, SP<br />
          CEP: 01244-000
        </>
      ),
      mapSrc:
        'https://maps.google.com/maps?q=Rua%20Bahia%2023%20São%20Paulo&t=&z=13&ie=UTF8&iwloc=&output=embed',
    },
    {
      name: 'São José dos Campos',
      address: (
        <>
          Jardim Apolo<br />
          São José dos Campos, SP<br />
          CEP: 12246-021
        </>
      ),
      mapSrc:
        'https://maps.google.com/maps?q=Avenida%20Nove%20de%20Julho%20685%20São%20José%20dos%20Campos&t=&z=13&ie=UTF8&iwloc=&output=embed',
    },
  ];

  const [currentOffice, setCurrentOffice] = useState(0);

  return (
    <Section id="contato" className="bg-secondary-300">
      <SectionTitle 
        title="Contato" 
        subtitle="Entre em contato para agendar uma consulta ou tirar dúvidas sobre o atendimento."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-secondary-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-primary-900 font-serif">Localização</h3>
          
          {/* Office selector */}
          <div className="flex space-x-2 mb-6">
            {offices.map((office, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentOffice(idx)}
                className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors ${
                  currentOffice === idx
                    ? 'bg-primary-700 text-white border-primary-700'
                    : 'bg-secondary-100 text-primary-700 border-secondary-300'
                }`}
              >
                {office.name}
              </button>
            ))}
          </div>
          
          <div className="mb-8">
            <div className="flex items-start mb-4">
              <MapPin className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={22} />
              <div>
                <h4 className="font-bold text-primary-900 mb-1">Endereço do Consultório</h4>
                <address className="text-primary-600 not-italic">
                  {offices[currentOffice].address}
                </address>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <Calendar className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={22} />
              <div>
                <h4 className="font-bold text-primary-900 mb-1">Dias de Atendimento</h4>
                <p className="text-primary-600">Segunda a sexta-feira</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={22} />
              <div>
                <h4 className="font-bold text-primary-900 mb-1">Horário de Funcionamento</h4>
                <p className="text-primary-600">Das 7h às 22h</p>
              </div>
            </div>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe 
              src={offices[currentOffice].mapSrc}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
            ></iframe>
          </div>
        </div>
        
        <div className="bg-secondary-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-primary-900 font-serif">Agende sua Consulta</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-primary-900 mb-3">Atendimento Presencial</h4>
              <p className="text-primary-600 mb-4">
                Consultas realizadas no consultório localizado no Higenópolis em São Paulo ou no Aquarius em São José dos Campos, em ambiente acolhedor e privativo.
              </p>
              <a 
                href="https://wa.me/5511977765788?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20presencial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="w-full" showWhatsApp>Agendar Presencial</Button>
              </a>
            </div>
            
            <div className="border-t border-secondary-300 pt-6">
              <h4 className="font-bold text-primary-900 mb-3">Atendimento Online</h4>
              <p className="text-primary-600 mb-4">
                Sessões realizadas por videochamada, oferecendo a mesma qualidade do atendimento presencial, com a conveniência de estar em casa.
              </p>
              <a 
                href="https://wa.me/5511977765788?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20online"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="w-full" showWhatsApp>Agendar Online</Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery of Office Locations */}
      {/* <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">Conheça os consultórios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/office_sp.jpeg"
              alt="Consultório em São Paulo - Rua Bahia, 23, Higienópolis"
              className="rounded-lg shadow-md w-full h-auto object-cover aspect-[4/3]"
            />
            <p className="text-center text-gray-700 mt-4 font-medium">
              São Paulo - Higienópolis
            </p>
          </div>
          <div>
            <img
              src="/office_sjc.jpg"
              alt="Consultório em São José dos Campos - Avenida Nove de Julho, 685, Jardim Apolo"
              className="rounded-lg shadow-md w-full h-auto object-cover aspect-[4/3]"
            />
            <p className="text-center text-gray-700 mt-4 font-medium">
              São José dos Campos - Jardim Apolo
            </p>
          </div>
        </div>
      </div> */}
    </Section>
  );
};

export default Contact;