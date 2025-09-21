import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-foreground">HWID</span>
            <span className="text-neon-pink glow-text"> SPOOFER</span>
          </h1>
          
          <div className="space-y-4 mb-12 text-lg lg:text-xl">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-neon-pink rounded-full glow-box"></span>
              <span className="text-muted-foreground">Bypass EAC, BattlEye & All Anti-Cheats</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-neon-pink rounded-full glow-box"></span>
              <span className="text-muted-foreground">Undetected Since 2022 • 50,000+ Users</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-neon-pink rounded-full glow-box"></span>
              <span className="text-muted-foreground">Instant Setup • Lifetime License</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="text-lg px-8 py-4 bg-neon-pink hover:bg-neon-pink/80 font-bold" asChild>
              <Link to="#products">GET SPOOFER $50</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10" asChild>
              <Link to="#features">VIEW PROOF</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl lg:text-3xl font-black text-neon-pink mb-1">2+</div>
              <div className="text-sm text-muted-foreground">Years UD</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-black text-neon-pink mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-black text-neon-pink mb-1">ALL</div>
              <div className="text-sm text-muted-foreground">AC Bypass</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-black text-neon-pink mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;