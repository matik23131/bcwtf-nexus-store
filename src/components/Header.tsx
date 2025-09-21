import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Menu, X, User, Settings } from "lucide-react";
import bcLogo from "@/assets/bc-wtf-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <div className="text-2xl font-bold">
                <span className="text-foreground">bc</span>
                <span className="text-neon-pink glow-text">.wtf</span>
              </div>
              <span className="text-xs text-muted-foreground -mt-1">Premium Game Tools</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-neon-pink transition-colors font-medium">Home</a>
            <a href="#products" className="text-foreground hover:text-neon-pink transition-colors font-medium">Products</a>
            <a href="#proof" className="text-foreground hover:text-neon-pink transition-colors font-medium">Proof</a>
            <a href="#discord" className="text-foreground hover:text-neon-pink transition-colors font-medium">Discord</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Admin Panel
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/auth">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-neon-pink transition-colors font-medium">Home</a>
              <a href="#products" className="text-foreground hover:text-neon-pink transition-colors font-medium">Products</a>
              <a href="#proof" className="text-foreground hover:text-neon-pink transition-colors font-medium">Proof</a>
              <a href="#discord" className="text-foreground hover:text-neon-pink transition-colors font-medium">Discord</a>
              <div className="flex flex-col space-y-2 pt-4">
                {user ? (
                  <>
                    <Link to="/admin">
                      <Button variant="ghost" className="w-full">Admin Panel</Button>
                    </Link>
                    <Button variant="ghost" onClick={signOut} className="w-full">Sign Out</Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth">
                      <Button variant="ghost" className="w-full">Sign In</Button>
                    </Link>
                    <Link to="/auth">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;