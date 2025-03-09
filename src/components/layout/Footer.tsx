import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">statml.in</h3>
            <p className="text-gray-400 text-sm">
              Advanced statistical and AI solutions for modern businesses
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white text-sm">Services</a></li>
              <li><a href="/case-studies" className="text-gray-400 hover:text-white text-sm">Case Studies</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/statistical-consulting" className="text-gray-400 hover:text-white text-sm">Statistical Consulting</a></li>
              <li><a href="/services/ai-ml-solutions" className="text-gray-400 hover:text-white text-sm">AI & ML Solutions</a></li>
              <li><a href="/services/data-science" className="text-gray-400 hover:text-white text-sm">Data Science</a></li>
              <li><a href="/services/research-support" className="text-gray-400 hover:text-white text-sm">Research Support</a></li>
              <li><a href="/services/technical-writing" className="text-gray-400 hover:text-white text-sm">Technical Writing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact</h3>
            <div className="flex items-center space-x-3 text-gray-400">
              <Mail className="h-5 w-5" />
              <span className="text-sm">contact@statml.in</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Phone className="h-5 w-5" />
              <span className="text-sm">+91 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPin className="h-5 w-5" />
              <span className="text-sm">Bangalore, India</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} statml.in. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}