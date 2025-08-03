import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-woman.jpg";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete(), 300);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-gradient-hero flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center relative">
        {/* Hero Image */}
        <div className="relative mb-8">
          <img 
            src="/lovable-uploads/08159533-8b42-4b07-a46f-36e905e88d51.png" 
            alt="Diverse Team" 
            className="w-80 h-48 object-cover mx-auto rounded-2xl shadow-glow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
        </div>
        
        {/* App Name */}
        <h1 className="text-6xl font-bold text-white mb-4 tracking-wide">
          CONNECT
        </h1>
        
        {/* Tagline */}
        <p className="text-xl text-white/90 font-medium max-w-md mx-auto leading-relaxed">
          Empowering Women Everywhere
        </p>
        
        {/* Loading animation */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white/80 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-white/80 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-white/80 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;