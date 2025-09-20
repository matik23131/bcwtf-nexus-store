import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cpu, HardDrive, Network } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <Cpu className="h-12 w-12 text-primary animate-pulse" />
              <HardDrive className="h-10 w-10 text-secondary" />
              <Network className="h-12 w-12 text-accent" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Fortnite HWID Spoofers
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Premium Hardware ID spoofers for Fortnite with EAC bypass. Undetected, permanent licenses, 
            and advanced spoofing technology trusted by thousands of players.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="#products">Browse Spoofers</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">EAC Bypass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25K+</div>
              <div className="text-muted-foreground">Fortnite Players</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support & Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;