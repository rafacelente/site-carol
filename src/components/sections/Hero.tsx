import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.JPG" 
          alt="Ambiente terapêutico acolhedor" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
          Tem coisas que só aparecem quando a gente se escuta de verdade.          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
          A terapia não é sobre ter todas as respostas - é sobre criar um espaço onde elas possam, enfim, surgir.          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://wa.me/5511977765788?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg" className="w-full sm:w-auto" showWhatsApp>
                Agendar Consulta
              </Button>
            </a>
            <a href="#sobre">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white/20">
                Saiba Mais
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <span className="text-sm mb-2">Conheça meu trabalho</span>
        <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;