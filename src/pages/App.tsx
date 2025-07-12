import React from 'react';
import { ThemeProvider } from '@/components/ThemeContext';
import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import CloudExperience from '@/components/CloudSkills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

interface AppProps {
  onBackToLanding: () => void;
}

const App: React.FC<AppProps> = ({ onBackToLanding }) => (
  <ThemeProvider>
    <div id="top" className="min-h-screen flex flex-col bg-background">
      {/* Back to Landing Button */}
      {/* <button
        onClick={onBackToLanding}
        className="fixed top-4 left-4 z-50 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        ← Back to Landing
      </button> */}
      
      <Header />
      <main className="flex-1">
        <About />
        <Projects />
        <Skills />
        <CloudExperience />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
