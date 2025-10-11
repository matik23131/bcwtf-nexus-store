import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  status: string;
  image_url: string;
  anti_cheat_compatibility: string[];
  is_permanent: boolean;
  detection_status: string;
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("status", "active")
        .limit(3);

      if (error) {
        console.error("Error fetching products:", error);
        return;
      }

      setProducts(data || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="cheats" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Fortnite Spoofers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Loading premium HWID spoofers...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cheats" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Professional tools with lifetime licenses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              description={product.description}
              price={`$${product.price}`}
              image={product.image_url || "/placeholder.svg"}
              rating={4.8}
              users="2.5k"
              status={product.detection_status as "undetected" | "updated" | "new"}
              features={product.features || []}
              antiCheatCompatibility={product.anti_cheat_compatibility || []}
              isPermanent={product.is_permanent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;