import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const glassStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, rgba(41,120,181,0.85) 0%, rgba(255,255,255,0.15) 100%)',
  backdropFilter: 'blur(8px)',
  border: '1.5px solid rgba(41,120,181,0.18)',
  boxShadow: '0 8px 32px 0 rgba(41,120,181,0.18)',
  transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  zIndex: 1000,
  position: 'fixed',
  bottom: '2em',
  right: '2em',
  opacity: 0,
  pointerEvents: 'none',
  transform: 'translateY(40px)',
};

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      setTimeout(() => {
        const btn = document.getElementById('scroll-to-top-btn');
        if (btn) {
          btn.style.opacity = '1';
          btn.style.pointerEvents = 'auto';
          btn.style.transform = 'translateY(0)';
        }
      }, 10);
    } else {
      const btn = document.getElementById('scroll-to-top-btn');
      if (btn) {
        btn.style.opacity = '0';
        btn.style.pointerEvents = 'none';
        btn.style.transform = 'translateY(40px)';
      }
      setTimeout(() => setShow(false), 200);
    }
  }, [isVisible]);

  if (!show) return null;
  return (
    <div id="scroll-to-top-btn"
      style={glassStyle}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.12)';
        e.currentTarget.style.boxShadow = '0 12px 32px 0 rgba(41,120,181,0.28)';
        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(41,120,181,1) 0%, rgba(255,255,255,0.25) 100%)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = glassStyle.boxShadow as string;
        e.currentTarget.style.background = glassStyle.background as string;
      }}
    >
      <a href="#top" aria-label="top" style={{ color: 'white', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FaArrowUp />
      </a>
    </div>
  );
};

export default ScrollToTop;
