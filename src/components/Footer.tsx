import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Starfield background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-12 right-16 w-1 h-1 bg-neon-pink rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-20 left-1/4 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-8 right-1/3 w-0.5 h-0.5 bg-cyber-purple rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-16 left-12 w-1 h-1 bg-electric-blue rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-8 right-20 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-16 left-1/2 w-0.5 h-0.5 bg-neon-pink rounded-full animate-pulse delay-800"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-600"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-poppins font-black text-3xl mb-4">
              <span className="text-foreground">bc.</span>
              <span className="text-neon-pink glow-text">wtf</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Copyright © bc.wtf 2025
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-bold mb-6 font-poppins text-lg">Navigation</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link to="/" className="hover:text-neon-pink transition-colors text-sm">Home</Link></li>
              <li><Link to="/products" className="hover:text-neon-pink transition-colors text-sm">Products</Link></li>
              <li><Link to="/reviews" className="hover:text-neon-pink transition-colors text-sm">Feedback</Link></li>
              <li><Link to="/status" className="hover:text-neon-pink transition-colors text-sm">Status</Link></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-foreground font-bold mb-6 font-poppins text-lg">Support</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-neon-pink transition-colors text-sm">Discord</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors text-sm">Setup Guide</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-foreground font-bold mb-6 font-poppins text-lg">Socials</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-neon-pink transition-colors text-sm">Discord</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors text-sm">Twitter</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors text-sm">YouTube</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors text-sm">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;