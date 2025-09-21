import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-neon-pink bg-clip-text text-transparent">
            Fortnite HWID Spoofer
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <span className="text-neon-pink font-semibold">PERMANENT LICENSE</span> • Bypass EAC, BattlEye & All Anti-Cheats • 
            Undetected for 2+ Years • Instant Setup • 24/7 Support
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-neon-pink hover:bg-neon-pink/80" asChild>
              <Link to="#products">Get Spoofer - $50</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-neon-pink text-neon-pink hover:bg-neon-pink/10" asChild>
              <Link to="/auth">View Features</Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-neon-pink mb-2">2+ Years</div>
              <div className="text-muted-foreground">Undetected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-pink mb-2">Permanent</div>
              <div className="text-muted-foreground">License</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-pink mb-2">All AC</div>
              <div className="text-muted-foreground">Bypassed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-pink mb-2">Instant</div>
              <div className="text-muted-foreground">Setup</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;