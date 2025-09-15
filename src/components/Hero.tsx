import { Button } from "@/components/ui/button";
import { Shield, Zap, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Logo */}
        <div className="mb-8">
          <div className="font-poppins font-black text-6xl lg:text-8xl xl:text-9xl mb-4">
            <div className="text-white relative -left-8 lg:-left-16">bc.</div>
            <div className="text-neon-pink glow-text -mt-6 lg:-mt-8">wtf</div>
          </div>
        </div>

        {/* Tagline */}
        <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-poppins">
          Premium Game <span className="text-neon-pink glow-text">Cheats</span> & Tools
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Dominate the competition with our undetected, premium gaming solutions. 
          Advanced features, lifetime updates, and 24/7 support.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 bg-dark-surface/50 px-4 py-2 rounded-lg border border-neon-pink/20">
            <Shield className="w-5 h-5 text-neon-pink" />
            <span className="text-white">Undetected</span>
          </div>
          <div className="flex items-center space-x-2 bg-dark-surface/50 px-4 py-2 rounded-lg border border-neon-pink/20">
            <Zap className="w-5 h-5 text-neon-pink" />
            <span className="text-white">Instant Delivery</span>
          </div>
          <div className="flex items-center space-x-2 bg-dark-surface/50 px-4 py-2 rounded-lg border border-neon-pink/20">
            <Star className="w-5 h-5 text-neon-pink" />
            <span className="text-white">Premium Quality</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="neon" size="lg" className="text-lg px-8 py-4 h-auto">
            Browse Cheats
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;