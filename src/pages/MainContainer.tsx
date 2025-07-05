import React, { useState, useRef } from 'react';
import Landing from './Landing';
import App from './App';

const TRANSITION_DURATION = 1100;

const MainContainer: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [ripple, setRipple] = useState<{
    x: number;
    y: number;
    show: boolean;
  }>({ x: 0, y: 0, show: false });
  const [fadeLanding, setFadeLanding] = useState(false);
  const landingRef = useRef<HTMLDivElement>(null);

  const handleLandingClick = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    setRipple({ x, y, show: true });
    setFadeLanding(true);
    setTimeout(() => {
      setShowLanding(false);
    }, TRANSITION_DURATION);
  };

  return (
    <div className="relative w-full h-full min-h-screen">
      {/* Portfolio always at the bottom */}
      <App onBackToLanding={() => window.location.reload()} />
      {/* Landing page overlays portfolio, with circular clip-path transition */}
      {showLanding && (
        <div
          ref={landingRef}
          className={`fixed inset-0 z-50 flex transition-opacity duration-700 ${fadeLanding ? 'opacity-0 scale-125 blur-lg' : 'opacity-100 scale-100 blur-0'}`}
          style={{ pointerEvents: fadeLanding ? 'none' : 'auto', transition: `opacity 0.7s, transform 1.1s cubic-bezier(0.4,0,0.2,1), filter 1.1s cubic-bezier(0.4,0,0.2,1)` }}
          onClick={handleLandingClick}
        >
          {/* Dramatic multi-color ripple with glowing border and shockwave */}
          {ripple.show && (
            <>
              {/* Main Ripple */}
              <span
                className="pointer-events-none absolute rounded-full"
                style={{
                  left: ripple.x - 900,
                  top: ripple.y - 900,
                  width: 1800,
                  height: 1800,
                  background: 'radial-gradient(circle, #a855f7 0%, #6366f1 40%, #0ea5e9 80%, transparent 100%)',
                  border: '10px solid #fff',
                  boxShadow: '0 0 120px 40px #a855f7, 0 0 0 16px rgba(168,85,247,0.2), 0 0 80px 40px #0ea5e9',
                  transform: 'scale(0)',
                  animation: `ripple-expand ${TRANSITION_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards`,
                  zIndex: 100,
                  opacity: 0.95,
                  filter: 'blur(1px)',
                }}
              />
              {/* Shockwave Outline */}
              <span
                className="pointer-events-none absolute rounded-full"
                style={{
                  left: ripple.x - 950,
                  top: ripple.y - 950,
                  width: 1900,
                  height: 1900,
                  border: '6px solid #fff',
                  boxShadow: '0 0 60px 10px #a855f7, 0 0 0 8px #0ea5e9',
                  background: 'transparent',
                  transform: 'scale(0.7)',
                  opacity: 0.7,
                  animation: `shockwave-expand ${TRANSITION_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards`,
                  zIndex: 101,
                  filter: 'blur(0.5px)',
                }}
              />
            </>
          )}
          <Landing onEnterPortfolio={() => {}} />
        </div>
      )}
      <style>{`
        @keyframes ripple-expand {
          to {
            transform: scale(2.5);
            opacity: 0;
            filter: blur(8px);
          }
        }
        @keyframes shockwave-expand {
          to {
            transform: scale(2.7);
            opacity: 0;
            filter: blur(6px);
          }
        }
      `}</style>
    </div>
  );
};

export default MainContainer; 