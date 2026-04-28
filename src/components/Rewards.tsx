import { motion } from 'motion/react';
import { Star, Gift, Smartphone } from 'lucide-react';

export function Rewards() {
  return (
    <section id="rewards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 mt-12 lg:mt-0 relative flex justify-center">
            {/* Mockup Container */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-72 h-[600px] bg-gray-900 rounded-[3rem] border-[14px] border-gray-900 shadow-2xl flex items-center justify-center overflow-hidden"
            >
              {/* Screen Content */}
              <div className="absolute inset-0 bg-brand-light flex flex-col pt-8 px-6 text-center">
                <div className="bg-red-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Star className="text-brand-red" size={40} fill="currentColor" />
                </div>
                <h4 className="font-display font-bold text-2xl text-gray-900 mb-2">You have 500 pts!</h4>
                <p className="text-sm text-gray-500 mb-8">Redeem for a free sandwich</p>
                <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 border border-gray-100 flex items-center justify-between">
                   <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden mr-3">
                         <img src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Sandwich" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-900 text-sm">Classic Sandwich</p>
                        <p className="text-brand-red text-xs font-bold">Free</p>
                      </div>
                   </div>
                   <button className="bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full">Redeem</button>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 border border-gray-100 flex items-center justify-between opacity-50">
                   <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden mr-3">
                         <img src="https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Nuggets" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-900 text-sm">8ct Nuggets</p>
                        <p className="text-gray-500 text-xs font-bold">1000 pts</p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-red font-bold tracking-wide uppercase text-sm mb-2">Cluck Rewards</h2>
            <h3 className="text-4xl font-display font-bold text-gray-900 mb-6 tracking-tight">Earn points. Get free food.</h3>
            <p className="text-lg text-gray-600 mb-8">
              Join Cluck Rewards today and start earning points on every purchase. Unlock exclusive offers, a birthday treat, and skip the line by ordering through the app.
            </p>
            
            <ul className="space-y-6 mb-10">
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-100 text-brand-red">
                    <Star className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">10 Points per Dollar</h4>
                  <p className="mt-1 text-gray-600">Earn points on every qualifying purchase.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-100 text-brand-red">
                    <Gift className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Birthday Rewards</h4>
                  <p className="mt-1 text-gray-600">Celebrate your special day with a free sandwich.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-100 text-brand-red">
                    <Smartphone className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Mobile Ordering</h4>
                  <p className="mt-1 text-gray-600">Order ahead and skip the line exclusively on the app.</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white flex items-center justify-center px-6 py-3 rounded-xl hover:bg-black transition-colors">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.5c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.2 1-1 0-2.3-1-3.7-1-1.6 0-3.1.9-4 2.3-1.9 3.2-.5 8.1 1.3 10.7.9 1.3 1.9 2.8 3.4 2.8 1.4 0 1.9-.9 3.6-.9 1.7 0 2.2.9 3.6.9 1.5 0 2.4-1.4 3.3-2.7 1.1-1.5 1.5-3 1.5-3.1-.1 0-3.1-1.2-3.1-4.6m-2.8-8.2c.8-1 1.3-2.3 1.1-3.7-1.2.1-2.6.8-3.4 1.7-.7.8-1.3 2.1-1.1 3.5 1.4.1 2.6-.6 3.4-1.5" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold leading-tight">App Store</div>
                </div>
              </button>
              <button className="bg-gray-900 text-white flex items-center justify-center px-6 py-3 rounded-xl hover:bg-black transition-colors">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.5.4-.8.9-.6l15.3 8.1c.5.3.5.9 0 1.2l-15.3 8.1c-.5.2-.9-.1-.9-.6m1-15.5v14l11-7-11-7z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
