import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";

const DiscordWidget = () => {
  const [onlineCount, setOnlineCount] = useState(247); // Simulated count
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    // Simulate fluctuating online count
    const interval = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 30000); // Update every 30 seconds

    // Simulate new updates notification
    const updateInterval = setInterval(() => {
      setHasUpdate(true);
      setTimeout(() => setHasUpdate(false), 10000); // Glow for 10 seconds
    }, 120000); // Every 2 minutes

    return () => {
      clearInterval(interval);
      clearInterval(updateInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Online Members Counter */}
      <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg flex items-center gap-2">
        <Users className="w-4 h-4 text-green-500 animate-pulse" />
        <div className="text-sm">
          <div className="text-muted-foreground text-xs">Online Now</div>
          <div className="text-foreground font-bold">{onlineCount} members</div>
        </div>
      </div>

      {/* Discord Join Button */}
      <Button 
        className={`gap-2 shadow-lg ${hasUpdate ? 'animate-pulse ring-2 ring-neon-pink' : ''}`}
        onClick={() => window.open('https://discord.gg/yourserver', '_blank')}
      >
        <MessageCircle className="w-4 h-4" />
        Join Discord
        {hasUpdate && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
        )}
      </Button>
    </div>
  );
};

export default DiscordWidget;
