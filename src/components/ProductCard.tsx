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
  const getStatusVariant = (status: string) => {
    switch(status) {
      case "undetected": return "bg-green-500/20 text-green-500 border-green-500/50";
      case "updated": return "bg-blue-500/20 text-blue-500 border-blue-500/50";
      case "new": return "bg-purple-500/20 text-purple-500 border-purple-500/50";
      default: return "bg-green-500/20 text-green-500 border-green-500/50";
    }
  };

  return (
    <div className="bg-card rounded-lg p-4 border border-border hover:border-primary/50 transition-colors group">
      {/* Image */}
      <div className="relative mb-3 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-32 object-cover transition-transform group-hover:scale-105"
        />
        <Badge className={`absolute top-2 right-2 text-xs ${getStatusVariant(status)}`}>
          {status.toUpperCase()}
        </Badge>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-xs line-clamp-2">{description}</p>
        </div>

        {isPermanent && (
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
            Lifetime
          </Badge>
        )}

        {/* Pricing */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
          <Button size="sm" className="text-xs">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;