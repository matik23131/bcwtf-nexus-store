import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Users } from "lucide-react";

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
  features 
}: ProductCardProps) => {
  const getStatusVariant = (status: string) => {
    switch(status) {
      case "undetected": return "bg-green-500/20 text-green-400 border-green-500/50";
      case "updated": return "bg-neon-pink/20 text-neon-pink border-neon-pink/50";
      case "new": return "bg-electric-blue/20 text-electric-blue border-electric-blue/50";
      default: return "bg-neon-pink/20 text-neon-pink border-neon-pink/50";
    }
  };

  return (
    <div className="gradient-card rounded-xl p-6 border border-neon-pink/20 hover-glow transition-glow group">
      {/* Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-semibold border ${getStatusVariant(status)}`}>
          {status.toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 font-poppins">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white font-semibold">{rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{users} users</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <Shield className="w-3 h-3 text-neon-pink" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-neon-pink font-poppins">{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
              )}
            </div>
            <span className="text-xs text-muted-foreground">per month</span>
          </div>
          <Button variant="neon" size="sm">
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;