import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import SiteProtection from "@/components/SiteProtection";

const Status = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteProtection />
      <AnimatedBackground />
      <Header />
      <div className="container mx-auto px-4 pt-4">
        <AnnouncementBanner />
      </div>
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            System Status
          </h1>
          <p className="text-muted-foreground text-lg">
            Real-time status of all services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">API Services</h3>
                <p className="text-muted-foreground">Core application services</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-medium">Operational</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Database</h3>
                <p className="text-muted-foreground">Data storage and retrieval</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-medium">Operational</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Authentication</h3>
                <p className="text-muted-foreground">User login and security</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-medium">Operational</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Status;