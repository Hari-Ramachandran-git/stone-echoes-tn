import { Button } from "@/components/ui/button";
import { Menu, BookOpen, Crown, Camera } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-temple rounded-lg flex items-center justify-center">
              <Crown className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h1 className="font-heritage text-xl font-bold text-primary">Tamil Heritage</h1>
              <p className="text-xs text-muted-foreground font-culture">Echoes of Eternity</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#dynasties" className="font-culture text-foreground hover:text-accent transition-colors">
              Dynasties
            </a>
            <a href="#monuments" className="font-culture text-foreground hover:text-accent transition-colors">
              Monuments
            </a>
            <a href="#heritage" className="font-culture text-foreground hover:text-accent transition-colors">
              Heritage
            </a>
            <a href="#quiz" className="font-culture text-foreground hover:text-accent transition-colors">
              Quiz
            </a>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;