import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
// Icons removed
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
            <div className="text-2xl font-bold">
              <span className="text-foreground">bc</span>
              <span className="text-neon-pink glow-text">.wtf</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/products">Products</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/status">Status</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/reviews">Reviews</Link>
            </Button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    {user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="flex items-center gap-2">
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
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col space-y-2">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link to="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link to="/products">Products</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link to="/status">Status</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link to="/reviews">Reviews</Link>
              </Button>
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