import React from 'react';
import { header } from '@/pages/portfolio';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const { homepage, title } = header;
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md shadow-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <h1 className="text-xl font-bold tracking-tight text-primary">
          {homepage ? (
            <a href={homepage} className="hover:underline underline-offset-4">
              {title}
            </a>
          ) : (
            title
          )}
        </h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
