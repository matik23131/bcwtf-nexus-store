import { Button } from "@/components/ui/button";
import { Cpu, Shield, Network, HardDrive } from "lucide-react";

const GameCategories = () => {
  const categories = [
    {
      icon: Cpu,
      name: "Fortnite Spoofers",
      description: "Premium HWID spoofers specifically designed for Fortnite with EAC bypass",
      count: "3+ spoofers",
      color: "text-primary"
    },
    {
      icon: HardDrive,
      name: "Hardware Spoofing", 
      description: "Advanced hardware ID spoofing for CPU, GPU, motherboard, and disk serials",
      count: "8+ features",
      color: "text-secondary"
    },
    {
      icon: Network,
      name: "Network Spoofing",
      description: "MAC address and network adapter spoofing for complete anonymity",
      count: "5+ tools",
      color: "text-accent"
    },
    {
      icon: Shield,
      name: "Anti-Cheat Bypass",
      description: "Specialized tools to bypass EAC, BattlEye, and other anti-cheat systems",
      count: "4+ bypasses",
      color: "text-green-500"
    }
  ];

  return (
    <section id="categories" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Spoofer Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional HWID spoofing solutions designed for Fortnite and anti-cheat bypass systems.
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
                      <span className="text-primary font-semibold text-sm">
                        {category.count}
                      </span>
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                        Browse →
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