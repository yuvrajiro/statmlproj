import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">statml.in</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-teal-600">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-teal-600">Services</Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-teal-600">Case Studies</Link>
            <Link to="/blog" className="text-gray-700 hover:text-teal-600">Blog</Link>
            <Link to="/about" className="text-gray-700 hover:text-teal-600">About</Link>
            <Link to="/contact">
              <Button variant="default" className="bg-teal-600 hover:bg-teal-700">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Services</Link>
            <Link to="/case-studies" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Case Studies</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Blog</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-teal-600">About</Link>
            <Link to="/contact" className="block">
              <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 mt-4">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}