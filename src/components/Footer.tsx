import { Button } from "@/components/ui/button";
// Icons removed

const Footer = () => {
  return (
    <footer className="bg-darker-surface border-t border-neon-pink/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="font-poppins font-black text-3xl mb-4">
              <span className="text-white">bc.</span>
              <span className="text-neon-pink glow-text">wtf</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              HWID spoofing tools since 2022. Lifetime licenses with Discord support.
            </p>
            <div className="flex space-x-4">
              <Button variant="cyber" size="sm">
                Discord
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
              <Button variant="ghost" size="sm">
                Support
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold mb-4 font-poppins">Products</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-neon-pink transition-colors">HWID Spoofer</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Registry Cleaner</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">MAC Spoofer</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Full Package</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4 font-poppins">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-neon-pink transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Setup Guide</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neon-pink/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
              <span className="text-sm">Undetected since 2022 - regularly updated</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 bc.wtf - Premium Gaming Solutions
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;