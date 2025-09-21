import { Shield, Clock, Headphones, Download, Lock, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "EAC/BE Bypass",
      description: "Bypasses EasyAntiCheat, BattlEye, Vanguard and all major anti-cheat systems.",
      color: "text-neon-pink"
    },
    {
      icon: Clock,
      title: "Permanent License",
      description: "One-time payment. Use forever. No monthly subscriptions or hidden fees.",
      color: "text-neon-pink"
    },
    {
      icon: Headphones,
      title: "Professional Support",
      description: "Direct Discord support. Real people, not bots. Average response time: 5 minutes.",
      color: "text-neon-pink"
    },
    {
      icon: Download,
      title: "Instant Setup",
      description: "Download and run. Works in under 30 seconds. No complex installation required.",
      color: "text-neon-pink"
    },
    {
      icon: Lock,
      title: "HWID Protection",
      description: "Complete hardware fingerprint masking. Safe from any hardware-based detection.",
      color: "text-neon-pink"
    },
    {
      icon: Star,
      title: "2+ Years Undetected",
      description: "Continuously updated. Never detected. Thousands of satisfied customers.",
      color: "text-neon-pink"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
            WHY CHOOSE <span className="text-neon-pink glow-text">BC.WTF</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The most trusted spoofer in the community. No bullshit, just results.
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