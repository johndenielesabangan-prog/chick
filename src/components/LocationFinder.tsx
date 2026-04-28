import { motion } from 'motion/react';
import { Search, MapPin, Navigation } from 'lucide-react';

export function LocationFinder() {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row">
          
          <div className="w-full lg:w-1/3 p-8 lg:p-12 lg:border-r border-gray-200">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">Find a Location</h3>
            <p className="text-gray-600 mb-8">Discover a Cluck 'n Go near you for dine-in, pickup, or delivery.</p>
            
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Enter Zip or City"
                className="w-full pl-12 pr-4 py-4 rounded-xl border-gray-300 shadow-sm focus:ring-brand-red focus:border-brand-red font-medium text-gray-900 bg-white border outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <button className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors mb-8">
              <Navigation size={18} />
              <span>Use My Location</span>
            </button>

            {/* Mock Results */}
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm group hover:border-brand-red cursor-pointer transition-colors">
                  <div className="flex justify-between items-start mb-2">
                     <h4 className="font-bold text-gray-900">Downtown Square </h4>
                     <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">Open</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">123 Main St, Anytown, CA 90210</p>
                  <p className="text-sm text-gray-500 mb-3 flex items-center">
                    <MapPin size={14} className="mr-1 text-brand-red" />
                    {2.4 + (i * 1.2)} miles away
                  </p>
                  <div className="flex space-x-2">
                     <button className="text-xs font-bold bg-red-50 text-brand-red px-3 py-1.5 rounded-full group-hover:bg-brand-red group-hover:text-white transition-colors">Order Now</button>
                     <button className="text-xs font-bold bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">Directions</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3 min-h-[400px] lg:min-h-full bg-gray-200 relative">
             <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
               alt="Map placeholder" 
               className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
             />
             {/* Mock map markers */}
             <motion.div 
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
             >
                <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shadow-lg border-4 border-white pointer-events-none">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                </div>
             </motion.div>
             <motion.div 
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
             >
                <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shadow-lg border-4 border-white pointer-events-none">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
