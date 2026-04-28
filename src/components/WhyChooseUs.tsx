import { CheckCircle2, Clock, Leaf, Smile } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    name: 'Fresh Ingredients',
    description: 'We source locally whenever possible and prepare our food fresh in our kitchens every single day.',
    icon: Leaf,
  },
  {
    name: 'Real Chicken',
    description: '100% real, whole, boneless breast of chicken. No fillers, no artificial preservatives.',
    icon: CheckCircle2,
  },
  {
    name: 'Lightning Fast',
    description: 'Our efficient drive-thrus and kitchens ensure you get your hot food quickly, every time.',
    icon: Clock,
  },
  {
    name: 'Service with a Smile',
    description: 'We believe in treating every customer like family. "My pleasure" isn\'t just a phrase, it\'s our guarantee.',
    icon: Smile,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div>
            <h2 className="text-brand-red font-bold tracking-wide uppercase text-sm mb-2">Our Promise</h2>
            <h3 className="text-4xl font-display font-bold text-gray-900 mb-6 tracking-tight">Quality you can taste. Service you can feel.</h3>
            <p className="text-lg text-gray-600 mb-10">
              We do things a little differently here. From our hand-breaded chicken to our team members who genuinely care about your day, we strive to make every meal special.
            </p>
            
            <dl className="mt-10 space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-red-100 text-brand-red">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-xl leading-6 font-bold text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-600 border-b border-gray-200 pb-8 last:border-0 last:pb-0">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <div className="mt-10 lg:mt-0 lg:col-start-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                alt="Inside our clean, modern restaurant"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/0 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-display font-medium text-2xl">Always fresh. Always our pleasure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
