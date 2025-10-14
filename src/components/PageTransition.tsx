import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Fast 300ms transition

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* Loading overlay with cyberpunk animation */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center animate-fade-in">
          <div className="relative">
            {/* Spinning rings */}
            <div className="w-20 h-20 border-4 border-neon-pink/20 border-t-neon-pink rounded-full animate-spin" />
            <div className="absolute inset-0 w-20 h-20 border-4 border-electric-blue/20 border-r-electric-blue rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
            
            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-neon-pink/50 rounded-full blur-md animate-pulse" />
            </div>
            
            {/* Text */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-neon-pink font-bold text-sm tracking-wider animate-pulse">bc.wtf</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Page content with fade */}
      <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;
