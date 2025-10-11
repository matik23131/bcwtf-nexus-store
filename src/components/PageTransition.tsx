import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsLoading(true);
      
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsLoading(false);
      }, 4000); // 4 second transition

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {!isLoading && children}
      {isLoading && (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="animate-pulse text-primary text-xl font-bold">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default PageTransition;
