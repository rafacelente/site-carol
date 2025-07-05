import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { faqs } from '../../data';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <SectionTitle 
        title="Perguntas Frequentes" 
        subtitle="Encontre respostas para as dúvidas mais comuns sobre o processo terapêutico."
      />
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              {activeIndex === index ? (
                <ChevronUp className="text-primary-600 flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
              )}
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Não encontrou o que procurava? Entre em contato diretamente para outras dúvidas.
        </p>
        <a 
          href="https://wa.me/5511999999999?text=Olá,%20tenho%20uma%20dúvida%20sobre%20o%20atendimento"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-primary-600 hover:text-primary-700 font-medium"
        >
          <span>Enviar mensagem</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </Section>
  );
};

export default FAQ;