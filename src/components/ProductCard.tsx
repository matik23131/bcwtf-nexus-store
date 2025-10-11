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

  const getStatusVariant = (status: string) => {
    switch(status) {
      case "undetected": return "bg-green-500/20 text-green-500 border-green-500/50";
      case "updated": return "bg-blue-500/20 text-blue-500 border-blue-500/50";
      case "new": return "bg-purple-500/20 text-purple-500 border-purple-500/50";
      default: return "bg-green-500/20 text-green-500 border-green-500/50";
    }
  };

  return (
    <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-colors group">
      {/* Image */}
      <div className="relative mb-6 overflow-hidden rounded-lg bg-card">
        <img 
          src={image === 'product-box.png' || image === '/api/placeholder/400/300' ? productBoxImage : image}
          alt={title}
          className="w-full h-56 object-cover transition-transform group-hover:scale-105"
        />
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