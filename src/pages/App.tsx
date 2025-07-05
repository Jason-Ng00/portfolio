import React from 'react';
import { ThemeProvider } from '@/components/ThemeContext';
import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

interface AppProps {
  onBackToLanding: () => void;
}

const App: React.FC<AppProps> = ({ onBackToLanding }) => (
  <ThemeProvider>
    <div id="top" className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
