import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-red-100 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-[80px] opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-brand-red font-semibold text-sm mb-4 tracking-wide uppercase">
                100% Real Chicken
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl tracking-tight font-display font-extrabold text-gray-900 sm:text-6xl md:text-7xl"
            >
              <span className="block xl:inline">Fresh, Crispy,</span>{' '}
              <span className="block text-brand-red">Made for You.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              Experience the perfect blend of juicy, hand-breaded chicken, toasted brioche buns, and our signature Cluck Sauce. Your new favorite meal is just a tap away.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-brand-red text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-brand-red-dark hover:scale-105 transition-all w-full sm:w-auto shadow-lg shadow-red-500/30 flex items-center justify-center group">
                Order Now
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-900 border border-gray-200 py-4 px-8 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors w-full sm:w-auto shadow-sm">
                Find a Location
              </button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden bg-white z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                className="w-full h-auto object-cover scale-105"
                src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop"
                alt="Delicious crispy chicken sandwich"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute top-1/2 right-0 -mr-12 -mt-24 text-gray-200 hidden lg:block -z-10">
              <svg width="120" height="120" fill="currentColor" viewBox="0 0 100 100">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" />
                </pattern>
                <rect width="100" height="100" fill="url(#dots)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
