import { Shield, Clock, Headphones, Download, Lock, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Undetected",
      description: "Working since 2022 with regular updates.",
      color: "text-neon-pink"
    },
    {
      icon: Clock,
      title: "Lifetime License",
      description: "Pay once, use forever. No subscriptions.",
      color: "text-neon-pink"
    },
    {
      icon: Headphones,
      title: "Discord Support",
      description: "Get help in our active Discord community.",
      color: "text-neon-pink"
    },
    {
      icon: Download,
      title: "Easy Setup",
      description: "Download, run, done. Takes under a minute.",
      color: "text-neon-pink"
    },
    {
      icon: Lock,
      title: "All Games",
      description: "Works with Fortnite, Apex, Warzone and more.",
      color: "text-neon-pink"
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "15,000+ active users trust our tools.",
      color: "text-neon-pink"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Reliable tools with proven track record.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-dark-surface/30 border border-neon-pink/10 hover:border-neon-pink/30 transition-colors group"
              >
                <div className={`inline-flex p-4 rounded-full bg-darker-surface mb-4 ${feature.color} group-hover:glow-box transition-glow`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;