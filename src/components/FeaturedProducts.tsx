import ProductCard from "./ProductCard";
import fpsImage from "@/assets/fps-cheats.jpg";
import brImage from "@/assets/br-cheats.jpg";
import mmoImage from "@/assets/mmo-cheats.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      title: "Elite FPS Cheats",
      description: "Premium aimbot, wallhack, and ESP for all major FPS games including CS2, Valorant, and Apex.",
      price: "$29.99",
      originalPrice: "$49.99",
      image: fpsImage,
      rating: 4.9,
      users: "2.1k",
      status: "undetected" as const,
      features: [
        "Advanced Aimbot with customizable settings",
        "3D ESP with player information",
        "Wallhack with distance markers",
        "Triggerbot and auto-fire"
      ]
    },
    {
      title: "Battle Royale Suite",
      description: "Complete cheat package for Fortnite, PUBG, and Warzone with radar and vehicle tracking.",
      price: "$39.99",
      originalPrice: "$59.99",
      image: brImage,
      rating: 4.8,
      users: "1.8k",
      status: "updated" as const,
      features: [
        "2D/3D Radar with all entities",
        "Item and loot ESP",
        "Vehicle location tracking",
        "Safe zone predictions"
      ]
    },
    {
      title: "MMO Automation Pro",
      description: "Advanced botting solution for World of Warcraft, FFXIV, and other MMORPGs.",
      price: "$24.99",
      image: mmoImage,
      rating: 4.7,
      users: "3.2k",
      status: "new" as const,
      features: [
        "Intelligent quest automation",
        "Farming and grinding bots",
        "Auction house trading",
        "Character progression optimization"
      ]
    }
  ];

  return (
    <section id="cheats" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-poppins">
            Featured <span className="text-neon-pink glow-text">Cheats</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our most popular and advanced gaming solutions, trusted by thousands of players worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;