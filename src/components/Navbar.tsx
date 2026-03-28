import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Product", "Blog", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="flex gap-0.5">
              <span className="w-2 h-2 rounded-full bg-orange" />
              <span className="w-2 h-2 rounded-full bg-orange" />
              <span className="w-2 h-2 rounded-full bg-orange" />
            </div>
            <span className="w-2 h-2 rounded-full bg-orange mt-0.5" />
          </div>
          <span className="text-xl font-bold text-navy tracking-tight">
            Germ<span className="text-orange">o</span>nizer
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-foreground hover:text-orange transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm font-medium text-foreground hover:text-orange transition-colors py-1"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
