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
    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group shadow-lg">
      {/* Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
        <Badge className={`absolute top-3 right-3 ${getStatusVariant(status)}`}>
          {status.toUpperCase()}
        </Badge>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-foreground font-semibold">{rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{users} users</span>
          </div>
        </div>

        {isPermanent && (
          <div className="mb-3">
            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
              Permanent License
            </Badge>
          </div>
        )}

        {antiCheatCompatibility.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">Anti-Cheat Bypass:</h4>
            <div className="flex flex-wrap gap-1">
              {antiCheatCompatibility.map((ac, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {ac}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <Shield className="w-3 h-3 text-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
              )}
            </div>
            <span className="text-xs text-muted-foreground">one-time</span>
          </div>
          <Button size="sm">
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;