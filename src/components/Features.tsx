import { Shield, Clock, Headphones, Download, Lock, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Undetected",
      description: "Advanced anti-cheat bypass technology keeps you safe from all detection systems.",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Instant Delivery",
      description: "Get your cheats immediately after purchase. No waiting, no delays.",
      color: "text-neon-pink"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our expert team is always ready to help you with any questions or issues.",
      color: "text-blue-400"
    },
    {
      icon: Download,
      title: "Lifetime Updates",
      description: "Free updates for as long as you're subscribed. Always stay ahead of patches.",
      color: "text-purple-400"
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Your data is encrypted and protected. We never share your information.",
      color: "text-orange-400"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Only the highest quality cheats make it to our store. Tested and verified.",
      color: "text-yellow-400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-poppins">
            Why Choose <span className="text-neon-pink glow-text">bc.wtf</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're the most trusted name in gaming cheats, with thousands of satisfied customers worldwide.
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