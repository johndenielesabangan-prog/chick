import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
             <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden aspect-[3/4] shadow-md"
                >
                   <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600&auto=format&fit=crop" alt="Family eating together" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="rounded-3xl overflow-hidden aspect-[3/4] shadow-md mt-10"
                >
                   <img src="https://images.unsplash.com/photo-1596622839947-f58c70420658?q=80&w=600&auto=format&fit=crop" alt="Smiling employee serving food" className="w-full h-full object-cover" />
                </motion.div>
             </div>
          </div>
          
          <div>
            <h2 className="text-brand-red font-bold tracking-wide uppercase text-sm mb-2">Our Story</h2>
            <h3 className="text-4xl font-display font-bold text-gray-900 mb-6 tracking-tight">More than just chicken.</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our journey began with a simple idea: serve high-quality, delicious food with unparalleled hospitality. We don't just want to be your fast food choice; we want to be part of the community.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Every sandwich is hand-breaded, every waffle fry is cooked to perfection, and every customer is treated with genuine care. Because we believe that good food creates good moments.
            </p>
            
            <button className="text-brand-red font-bold hover:text-brand-red-dark flex items-center group">
               Read our full story
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
               </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
