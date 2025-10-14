import Header from "@/components/Header";
import FeaturedProducts from "@/components/FeaturedProducts";
import AnimatedBackground from "@/components/AnimatedBackground";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import SiteProtection from "@/components/SiteProtection";
import PurchaseNotifications from "@/components/PurchaseNotifications";
import DiscordWidget from "@/components/DiscordWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteProtection />
      <AnimatedBackground />
      <PurchaseNotifications />
      <DiscordWidget />
      <Header />
      <div className="container mx-auto px-4 pt-4">
        <AnnouncementBanner />
      </div>
      <main>
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default Index;