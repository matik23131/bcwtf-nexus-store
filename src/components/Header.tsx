import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-darker-surface border-b border-neon-pink/20 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="font-poppins font-black text-2xl lg:text-3xl">
              <span className="text-white">bc.</span>
              <span className="text-neon-pink glow-text">wtf</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#cheats" className="text-muted-foreground hover:text-neon-pink transition-colors">
                Cheats
              </a>
              <a href="#categories" className="text-muted-foreground hover:text-neon-pink transition-colors">
                Categories
              </a>
              <a href="#support" className="text-muted-foreground hover:text-neon-pink transition-colors">
                Support
              </a>
              <a href="#about" className="text-muted-foreground hover:text-neon-pink transition-colors">
                About
              </a>
            </nav>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center bg-dark-surface border border-neon-pink/30 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <input 
                type="text" 
                placeholder="Search cheats..." 
                className="bg-transparent text-sm text-white placeholder:text-muted-foreground border-none outline-none w-40"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-neon-pink text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </Button>
            
            <Button variant="cyber" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;