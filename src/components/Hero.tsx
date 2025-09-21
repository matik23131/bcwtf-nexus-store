import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-foreground">PREMIUM HWID</span>
            <span className="text-neon-pink glow-text"> SPOOFER</span>
          </h1>
          
          <div className="space-y-3 mb-10 text-base lg:text-lg">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-neon-pink rounded-full"></span>
              <span className="text-muted-foreground">EAC, BattlEye, Vanguard Compatible</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-neon-pink rounded-full"></span>
              <span className="text-muted-foreground">Lifetime License - No Monthly Fees</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-neon-pink rounded-full"></span>
              <span className="text-muted-foreground">30 Second Setup • Discord Support</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-base px-8 py-3 bg-neon-pink hover:bg-neon-pink/90 font-semibold" asChild>
              <Link to="#products">Buy Now - $65</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-3 border-neon-pink/30 text-neon-pink hover:bg-neon-pink/10" asChild>
              <Link to="#features">Discord</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-xl lg:text-2xl font-bold text-neon-pink mb-1">2+</div>
              <div className="text-xs text-muted-foreground">Years Undetected</div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-bold text-neon-pink mb-1">15K+</div>
              <div className="text-xs text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-bold text-neon-pink mb-1">ALL</div>
              <div className="text-xs text-muted-foreground">Anti-Cheats</div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-bold text-neon-pink mb-1">24/7</div>
              <div className="text-xs text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;