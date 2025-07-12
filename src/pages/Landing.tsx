import React, { useRef, useEffect, useState } from 'react';

interface LandingProps {
  onEnterPortfolio: () => void;
}

const Landing: React.FC<LandingProps> = ({ onEnterPortfolio }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Prevent scrollbar
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate normalized position (-1 to 1)
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    
    setMousePosition({ x, y });
    
    if (textRef.current) {
      // More dramatic rotation effects
      const rotateY = x * 25; // -25 to 25 degrees
      const rotateX = -y * 15; // -15 to 15 degrees
      const scale = 1 + Math.abs(x * y) * 0.1; // Subtle scale effect
      
      textRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(${scale})
      `;
    }
  };

  const handleMouseLeave = () => {
    if (textRef.current) {
      textRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
    setMousePosition({ x: 0, y: 0 });
  };

  const handleClick = () => {
    onEnterPortfolio();
  };

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden select-none cursor-pointer"
      style={{ zIndex: 9999 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={(e) => {
        handleMouseLeave();
        setShowTooltip(false);
      }}
      onClick={handleClick}
      onMouseEnter={() => setShowTooltip(true)}
    >
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 opacity-30">
        {/* Large particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.6,
            }}
          />
        ))}
        {/* Medium particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute w-1 h-1 bg-purple-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.8,
            }}
          />
        ))}
        {/* Small particles */}
        {[...Array(60)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
              opacity: 0.9,
            }}
          />
        ))}
        {/* Floating particles with different colors */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`floating-${i}`}
            className={`absolute rounded-full animate-bounce ${
              i % 4 === 0 ? 'bg-pink-300' : 
              i % 4 === 1 ? 'bg-cyan-300' : 
              i % 4 === 2 ? 'bg-yellow-300' : 'bg-green-300'
            }`}
            style={{
              width: `${0.5 + Math.random() * 1.5}px`,
              height: `${0.5 + Math.random() * 1.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      <div
        ref={textRef}
        className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white transition-all duration-300 ease-out will-change-transform"
        style={{ 
          textAlign: 'center', 
          letterSpacing: '0.1em',
          textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
          lineHeight: '1.1'
        }}
      >
        <div className="mb-4">welcome to</div>
        <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
          Jason Ng's
        </div>
        <div className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black">
          workspace
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20 animate-pulse">
          <span className="text-lg font-medium">Click to visit portfolio</span>
        </div>
      )}

      {/* Subtle glow effect that follows mouse */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none transition-all duration-500 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
          left: `${(mousePosition.x + 1) * 50}%`,
          top: `${(mousePosition.y + 1) * 50}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
};

export default Landing; 