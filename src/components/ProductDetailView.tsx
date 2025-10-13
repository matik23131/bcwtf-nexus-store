import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import productBoxImage from "@/assets/product-box.png";

const ProductDetailView = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("1-day");
  const [isAdding, setIsAdding] = useState(false);

  // Static product data for now
  const product = {
    title: "Fortnite Ext Temp Spoofer",
    price: "$7.99",
    image: productBoxImage,
    status: "undetected"
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    toast.success("Added to cart!", {
      icon: <ShoppingCart className="h-4 w-4" />,
    });
    setTimeout(() => setIsAdding(false), 1000);
  };

  const pricingPlans = [
    { id: "1-day", label: "1 DAY", price: "$7.99" },
    { id: "3-day", label: "3 DAY", price: "$15.99" },
    { id: "1-week", label: "1 WEEK", price: "$29.99" },
    { id: "1-month", label: "1 MONTH", price: "$59.99" }
  ];

  const getStatusVariant = (status: string) => {
    switch(status) {
      case "undetected": return "bg-green-500/20 text-green-500 border-green-500/50";
      case "updated": return "bg-blue-500/20 text-blue-500 border-blue-500/50";
      case "new": return "bg-purple-500/20 text-purple-500 border-purple-500/50";
      default: return "bg-green-500/20 text-green-500 border-green-500/50";
    }
  };

  const getSelectedPrice = () => {
    const plan = pricingPlans.find(p => p.id === selectedPlan);
    return plan?.price || "$7.99";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Cart Icon with Animation */}
      <div className="fixed top-20 right-6 z-50">
        <div className={`relative transition-all duration-300 ${isAdding ? 'scale-125' : 'scale-100'}`}>
          <ShoppingCart className={`h-8 w-8 ${isAdding ? 'text-neon-pink glow-text' : 'text-foreground'}`} />
          {isAdding && (
            <div className="absolute -top-1 -right-1 h-5 w-5 bg-neon-pink rounded-full animate-ping" />
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/products')}
          className="mb-6 text-foreground hover:text-neon-pink"
        >
          ← Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Section */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-600/20 p-1">
              <div className="bg-card rounded-xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full aspect-square object-contain p-8"
                />
              </div>
              <Badge className={`absolute top-6 right-6 ${getStatusVariant(product.status)} border`}>
                {product.status.toUpperCase()}
              </Badge>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {[1,2,3,4,5].map((i) => (
                <div 
                  key={i} 
                  className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 ${
                    i === 1 ? 'border-neon-pink' : 'border-border/40'
                  } hover:border-neon-pink/50 transition-all cursor-pointer`}
                >
                  <img 
                    src={product.image} 
                    alt={`${product.title} ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Title & Badges */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.title}</h1>
              <div className="flex gap-2 mb-6">
                <Badge variant="outline" className="border-neon-pink text-neon-pink">FORTNITE</Badge>
                <Badge className="bg-green-500/20 text-green-400 border border-green-500/50">INSTANT DELIVERY</Badge>
              </div>
              <p className="text-3xl font-bold text-neon-pink glow-text">{getSelectedPrice()}</p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-12 w-12 border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10"
              >
                −
              </Button>
              <span className="text-xl font-bold w-12 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-12 w-12 border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10"
              >
                +
              </Button>
            </div>

            {/* Pricing Plans */}
            <div className="space-y-3">
              {pricingPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`p-5 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedPlan === plan.id 
                      ? 'border-neon-pink bg-neon-pink/10' 
                      : 'border-border/40 hover:border-neon-pink/30'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{plan.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-neon-pink">{plan.price}</span>
                      <span className="text-sm text-green-400">IN STOCK</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add to Cart Button */}
            <Button 
              size="lg" 
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-full text-lg py-7 bg-gradient-to-r from-neon-pink to-purple-600 hover:from-neon-pink/90 hover:to-purple-600/90 text-white font-bold transition-all"
            >
              {isAdding ? "Adding..." : "Add To Cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;