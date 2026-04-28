import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <h2 className="font-display font-bold text-3xl mb-6 text-white tracking-tight">
              Cluck 'n Go
            </h2>
            <p className="text-gray-400 mb-6 font-medium">Join our mailing list for news and special offers.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-xl focus:outline-none focus:border-brand-red w-full"
              />
              <button 
                type="submit" 
                className="bg-brand-red text-white px-6 py-2 rounded-xl font-bold hover:bg-brand-red-dark transition-colors whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide text-gray-200">Our Menu</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sandwiches</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nuggets & Tenders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beverages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Desserts</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide text-gray-200">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Franchising</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press Room</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide text-gray-200">Connect With Us</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-brand-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-brand-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <p className="text-gray-400 mb-2">Download the app</p>
            <div className="flex space-x-2">
               {/* Minimal app store buttons */}
               <button className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-sm font-bold transition-colors">App Store</button>
               <button className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-sm font-bold transition-colors">Google Play</button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cluck 'n Go. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
