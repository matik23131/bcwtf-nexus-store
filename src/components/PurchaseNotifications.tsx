import { useEffect, useState } from "react";
import { toast } from "sonner";

interface PurchaseEvent {
  product: string;
  time: number;
}

const PurchaseNotifications = () => {
  const [lastNotification, setLastNotification] = useState(0);

  const products = [
    "Fortnite Ext Temp Spoofer",
    "Valorant HWID Spoofer", 
    "Apex Legends Cleaner",
    "EAC Bypass Tool",
    "Universal Spoofer Pro"
  ];

  const locations = [
    "United States",
    "United Kingdom", 
    "Germany",
    "Canada",
    "Australia",
    "France"
  ];

  useEffect(() => {
    const showRandomPurchase = () => {
      const now = Date.now();
      if (now - lastNotification < 8000) return; // Minimum 8 seconds between notifications
      
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const minutesAgo = Math.floor(Math.random() * 15) + 1;
      
      toast(
        `🎉 Someone from ${randomLocation} just purchased ${randomProduct}`,
        {
          description: `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`,
          duration: 5000,
          className: "border-neon-pink/50 bg-card/95 backdrop-blur-sm",
        }
      );
      
      setLastNotification(now);
    };

    // Show first notification after 5 seconds
    const firstTimer = setTimeout(showRandomPurchase, 5000);
    
    // Then show random notifications between 15-45 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 30000 + 15000; // 15-45 seconds
      setTimeout(showRandomPurchase, randomDelay);
    }, 45000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [lastNotification]);

  return null;
};

export default PurchaseNotifications;
