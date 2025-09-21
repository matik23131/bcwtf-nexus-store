import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Shield, Users } from "lucide-react";

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
              Premium game tools since 2022. Undetected solutions with 
              lifetime support for serious players.
            </p>
            <div className="flex space-x-4">
              <Button variant="cyber" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Discord
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold mb-4 font-poppins">Products</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-neon-pink transition-colors">FPS Cheats</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Battle Royale</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">MMO Bots</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">MOBA Scripts</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Racing Mods</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4 font-poppins">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-neon-pink transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Installation Guide</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Discord Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neon-pink/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm">All products are undetected and regularly updated</span>
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