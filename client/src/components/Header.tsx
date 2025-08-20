import { Link } from "wouter";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-card border-b border-border py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="text-lg font-bold text-foreground">
            <img src="/prakash pic.png" alt="Prakash V.S. Tomar" className="h-8 w-8 rounded-full" />
          </div>
          <div className="hidden md:flex space-x-6">
            {/* Desktop Navigation */}

            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#accomplishments" className="text-muted-foreground hover:text-primary transition-colors">
              Accomplishments
            </Link>
            <Link href="#education" className="text-muted-foreground hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </nav>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="#about" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="#skills" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Skills
            </Link>
            <Link href="#experience" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Experience
            </Link>
            <Link href="#projects" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link href="#accomplishments" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Accomplishments
            </Link>
            <Link href="#education" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Education
            </Link>
            <Link href="#contact" className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;