import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">Caroline Venas</h3>
            <p className="text-secondary-200 mb-4">
              Psicóloga clínica com abordagem psicanalítica, dedicada a proporcionar um espaço seguro e acolhedor para crescimento e autoconhecimento.
            </p>
            <p className="text-secondary-200 text-sm">
              CRP: 06/183666
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+5511977765788" className="text-secondary-200 hover:text-white transition-colors">
                  (11) 97776-5788
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:carolinevenas@gmail.com" className="text-secondary-200 hover:text-white transition-colors">
                  carolinevenas@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <address className="text-secondary-200 not-italic">
                  Avenida Nove de Julho, 685. Jardim Apolo<br />
                  São José dos Campos, SP<br />
                  CEP: 12246-021
                </address>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">Siga-me</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://instagram.com/psi.carolinevenas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary-700 hover:bg-secondary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/caroline-venas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary-700 hover:bg-secondary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-secondary-200 text-sm">
              Horário de atendimento:<br />
              Segunda a sexta: 9h às 22h
            </p>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-12 pt-6 text-center text-sm text-secondary-400">
          <p>© {new Date().getFullYear()} Caroline Venas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;