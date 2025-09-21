import { Button } from "@/components/ui/button";
import { Cpu, Shield, Network, HardDrive } from "lucide-react";

const GameCategories = () => {
  const categories = [
    {
      icon: Cpu,
      name: "HWID Spoofer",
      description: "Change your hardware IDs to bypass hardware bans completely",
      count: "$65",
      color: "text-neon-pink"
    },
    {
      icon: HardDrive,
      name: "Registry Cleaner", 
      description: "Clean traces left by games and anti-cheat systems",
      count: "$25",
      color: "text-neon-pink"
    },
    {
      icon: Network,
      name: "MAC Spoofer",
      description: "Instantly change your network adapter MAC address",
      count: "$15",
      color: "text-neon-pink"
    },
    {
      icon: Shield,
      name: "Full Package",
      description: "Complete spoofing solution with all tools included",
      count: "$85",
      color: "text-neon-pink"
    }
  ];

  return (
    <section id="categories" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Available Tools</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Individual tools or complete packages for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group cursor-pointer shadow-lg"
              >
                <div className="text-center space-y-4">
                  <div className={`p-3 rounded-lg bg-background ${category.color} mx-auto w-fit`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-neon-pink font-bold text-lg">
                        {category.count}
                      </span>
                      <Button variant="ghost" size="sm" className="text-neon-pink hover:bg-neon-pink/10">
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;