
import { ReactNode } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
}

const AnimatedBackground = ({ children }: AnimatedBackgroundProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#151823] to-[#262d4a] p-4 pb-16 md:pb-4 relative overflow-hidden">
      {/* Animated network nodes in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/10 via-transparent to-transparent"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}

        {/* Lens flare effect */}
        <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      {children}
    </div>
  );
};

export default AnimatedBackground;
