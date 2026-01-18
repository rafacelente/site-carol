import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import CaminhosDaAnalise from './components/sections/CaminhosDaAnalise';
import Palestras from './components/sections/Palestras';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CaminhosDaAnalise />
        <Testimonials />
        <Palestras />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;