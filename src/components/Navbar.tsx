import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Locations', href: '#locations' },
    { name: 'Rewards', href: '#rewards' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <h1 className={`font-display font-bold text-2xl tracking-tight ${isScrolled ? 'text-brand-red' : 'text-brand-red drop-shadow-md'}`}>
              Cluck 'n Go
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-brand-red ${
                    isScrolled ? 'text-gray-800' : 'text-gray-900 drop-shadow-sm'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 border-l border-gray-300 pl-6 border-opacity-30">
              <button className="flex items-center space-x-1 text-gray-800 hover:text-brand-red transition">
                <MapPin size={20} />
                <span className="font-medium text-sm">Find Store</span>
              </button>
              <button className="bg-brand-red hover:bg-brand-red-dark text-white rounded-full p-2.5 shadow-md hover:shadow-lg transition flex items-center justify-center">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="bg-brand-red text-white rounded-full p-2">
              <ShoppingBag size={18} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1 rounded-md ${isScrolled ? 'text-gray-800' : 'text-gray-900'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-brand-red hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 px-4 py-3 rounded-full text-gray-900 font-medium hover:bg-gray-200 transition">
                  <MapPin size={20} />
                  <span>Find a Location</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
