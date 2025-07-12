import React, { useRef, useEffect, useState } from 'react';
import { cloudExperience } from '@/pages/portfolio';
import { FaAws, FaCloud, FaGoogle, FaMicrosoft, FaCloudflare } from 'react-icons/fa';
import { SiFirebase, SiVercel, SiNetlify } from 'react-icons/si';

const iconMap: Record<string, React.ReactNode> = {
  AWS: <FaAws className="text-yellow-400" />,
  Azure: <FaMicrosoft className="text-blue-500" />,
  'Google Cloud': <FaGoogle className="text-red-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Vercel: <SiVercel className="text-black dark:text-white" />,
  Netlify: <SiNetlify className="text-green-400" />,
  Cloudflare: <FaCloudflare className="text-orange-400" />,
};

const CloudExperience: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  if (!cloudExperience.length) return null;
  return (
    <section className="py-20 px-4" id="cloud-experience" style={{scrollMarginTop: '90px'}}>
      <div ref={sectionRef} className={`max-w-4xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-center uppercase mb-12 text-3xl font-bold text-foreground tracking-wide">
          Cloud Experience
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-3xl mx-auto">
          {cloudExperience.map((skill, idx) => (
            <div
              key={skill}
              className="relative group flex flex-col items-center"
            >
              <span
                className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-white shadow-xl text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 animate-float"
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                {iconMap[skill] || <FaCloud />}
              </span>
              <span className="mt-3 text-base font-semibold text-foreground drop-shadow-sm">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 2.6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CloudExperience; 