import { motion } from 'motion/react';
import { ShoppingBag, CarFront } from 'lucide-react';

export function OnlineOrdering() {
  return (
    <section className="py-24 bg-brand-red relative overflow-hidden">
      {/* Abstract Background Patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="pattern_circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="4" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern_circles)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight"
          >
            Skip the Line. Order Online.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Order ahead for quick pickup or get it delivered straight to your door. Fresh, hot, and ready in minutes.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.button 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center space-x-3 bg-brand-red text-white py-5 px-8 rounded-2xl font-bold text-xl hover:bg-brand-red-dark transition-colors shadow-lg shadow-red-500/20"
            >
              <ShoppingBag size={28} />
              <span>Order Pickup</span>
            </motion.button>

            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center space-x-3 bg-gray-900 text-white py-5 px-8 rounded-2xl font-bold text-xl hover:bg-black transition-colors shadow-lg shadow-gray-900/20"
            >
              <CarFront size={28} />
              <span>Order Delivery</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
