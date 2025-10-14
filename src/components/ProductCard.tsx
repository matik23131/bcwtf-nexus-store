import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import productBoxImage from "@/assets/product-box.png";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  users: string;
  status: "undetected" | "updated" | "new";
  features: string[];
  antiCheatCompatibility?: string[];
  isPermanent?: boolean;
}

const ProductCard = ({ 
  title, 
  description, 
  price, 
  originalPrice, 
  image, 
  rating, 
  users, 
  status, 
  features,
  antiCheatCompatibility = [],
  isPermanent = false
}: ProductCardProps) => {
  const navigate = useNavigate();
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;
    
    const glowIntensity = Math.min(Math.abs(rotateX) + Math.abs(rotateY), 20) / 20;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none',
      boxShadow: `0 ${Math.abs(rotateX) * 2}px ${30 + Math.abs(rotateX) * 3}px rgba(255, 0, 128, ${0.2 + glowIntensity * 0.3}), 
                  ${rotateY * 2}px 0 ${30 + Math.abs(rotateY) * 3}px rgba(0, 200, 255, ${0.2 + glowIntensity * 0.3})`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'all 0.5s ease',
      boxShadow: 'none',
    });
  };

  const getStatusVariant = (status: string) => {
    switch(status) {
      case "undetected": return "bg-green-500/20 text-green-500 border-green-500/50";
      case "updated": return "bg-blue-500/20 text-blue-500 border-blue-500/50";
      case "new": return "bg-purple-500/20 text-purple-500 border-purple-500/50";
      default: return "bg-green-500/20 text-green-500 border-green-500/50";
    }
  };

  return (
    <div 
      className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 group relative overflow-hidden"
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shader-style lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-transparent to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink/20 to-electric-blue/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
      {/* Image */}
      <div className="relative mb-6 overflow-hidden rounded-lg bg-card">
        <img 
          src={image === 'product-box.png' || image === '/api/placeholder/400/300' ? productBoxImage : image}
          alt={title}
          className="w-full h-56 object-cover transition-transform group-hover:scale-105"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
        {/* Invisible watermark overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 text-[8px] leading-3 overflow-hidden select-none">
          {[...Array(50)].map((_, i) => (
            <span key={i} className="text-primary">bc.wtf </span>
          ))}
        </div>
        <Badge className={`absolute top-3 right-3 ${getStatusVariant(status)}`}>
          {status.toUpperCase()}
        </Badge>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <Button size="default" onClick={() => navigate(`/product/${title.toLowerCase().replace(/\s+/g, '-')}`)}>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;