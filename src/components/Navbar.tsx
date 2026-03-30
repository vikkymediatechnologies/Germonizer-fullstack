import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/product" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">

        {/* ✅ Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Gemonics Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="hidden sm:block font-bold text-navy text-lg">
            Genomics
          </span>
        </Link>

        {/* ✅ Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-orange"
                      : "text-foreground hover:text-orange"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ✅ Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 animate-in slide-in-from-top duration-200">
          <ul className="flex flex-col gap-4 pt-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-medium py-2 ${
                      isActive
                        ? "text-orange"
                        : "text-foreground hover:text-orange"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;