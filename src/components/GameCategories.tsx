import { Button } from "@/components/ui/button";
import { Crosshair, Gamepad2, Sword, Trophy, Zap, Target } from "lucide-react";

const GameCategories = () => {
  const categories = [
    {
      icon: Crosshair,
      name: "FPS Games",
      description: "Counter-Strike, Valorant, Apex Legends",
      count: "15+ cheats",
      color: "text-red-400"
    },
    {
      icon: Target,
      name: "Battle Royale", 
      description: "Fortnite, PUBG, Warzone",
      count: "12+ cheats",
      color: "text-orange-400"
    },
    {
      icon: Sword,
      name: "MMORPGs",
      description: "WoW, FFXIV, Lost Ark",
      count: "8+ bots",
      color: "text-purple-400"
    },
    {
      icon: Trophy,
      name: "MOBA Games",
      description: "League of Legends, Dota 2",
      count: "6+ scripts",
      color: "text-blue-400"
    },
    {
      icon: Gamepad2,
      name: "Racing Games",
      description: "Forza, Gran Turismo, F1",
      count: "4+ mods",
      color: "text-green-400"
    },
    {
      icon: Zap,
      name: "Indie Games",
      description: "Rust, DayZ, Escape from Tarkov",
      count: "10+ cheats",
      color: "text-neon-pink"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-darker-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-poppins">
            Game <span className="text-neon-pink glow-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of cheats and tools for every gaming genre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="gradient-card rounded-xl p-6 border border-neon-pink/20 hover-glow transition-glow group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-dark-surface/50 ${category.color} group-hover:glow-box transition-glow`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 font-poppins group-hover:text-neon-pink transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-neon-pink font-semibold text-sm">
                        {category.count}
                      </span>
                      <Button variant="ghost" size="sm" className="text-neon-pink hover:text-black hover:bg-neon-pink">
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