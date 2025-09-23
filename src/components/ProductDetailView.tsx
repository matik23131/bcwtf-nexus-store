import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Icons removed
import { useNavigate } from "react-router-dom";

const ProductDetailView = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("1-day");

  // Static product data for now
  const product = {
    title: "Fortnite Ext Temp Spoofer",
    price: "$7.99",
    image: "/src/assets/br-cheats.jpg",
    status: "undetected"
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
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-muted"
        >
          ← Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-8 aspect-square">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <Badge className={`absolute top-4 right-4 ${getStatusVariant(product.status)}`}>
                {product.status.toUpperCase()}
              </Badge>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-16 h-16 bg-muted rounded-lg border-2 border-primary/20">
                  <img 
                    src={product.image} 
                    alt={`${product.title} ${i}`}
                    className="w-full h-full object-cover rounded-lg opacity-60"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.title}</h1>
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">FORTNITE</Badge>
                <Badge className="bg-green-500/20 text-green-500">INSTANT DELIVERY</Badge>
              </div>
              <p className="text-2xl font-bold text-primary">{getSelectedPrice()}</p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </Button>
              <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>

            {/* Pricing Plans */}
            <div className="space-y-3">
              {pricingPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedPlan === plan.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-muted hover:border-muted-foreground'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                      <span className="font-semibold">{plan.label}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold">{plan.price}</span>
                      <span className="text-xs text-muted-foreground ml-2">IN STOCK</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add to Cart Button */}
            <Button 
              size="lg" 
              className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;