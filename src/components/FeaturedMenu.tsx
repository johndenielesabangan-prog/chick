import { motion } from 'motion/react';

const menuItems = [
  {
    id: 1,
    name: "Classic Chicken Sandwich",
    description: "A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
    price: "$5.29",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop",
    calories: "440 Cal"
  },
  {
    id: 2,
    name: "Spicy Deluxe Sandwich",
    description: "A boneless breast of chicken seasoned with a spicy blend of peppers, hand-breaded, pressure cooked, served on a toasted bun with pepper jack cheese, lettuce, and tomato.",
    price: "$6.19",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    calories: "550 Cal"
  },
  {
    id: 3,
    name: "Crispy Chicken Nuggets",
    description: "Bite-sized pieces of boneless chicken breast, seasoned to perfection, hand-breaded and pressure cooked. Perfect for dipping.",
    price: "$4.99 (8ct)",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
    calories: "250 Cal"
  },
  {
    id: 4,
    name: "Waffle Potato Fries",
    description: "Waffle-cut potatoes cooked in canola oil until crispy outside and tender inside. Sprinkled with sea salt.",
    price: "$2.79",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800&auto=format&fit=crop",
    calories: "420 Cal"
  }
];

export function FeaturedMenu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-bold tracking-wide uppercase text-sm mb-2">Our Menu</h2>
          <h3 className="text-4xl font-display font-bold text-gray-900 mb-4 tracking-tight">Crave-Worthy Classics</h3>
          <p className="text-xl text-gray-600">
            Made with love, fresh ingredients, and our signature secret blend of spices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-brand-light rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-display font-bold text-gray-900 leading-tight">{item.name}</h4>
                </div>
                <div className="text-sm font-medium text-gray-500 mb-3">{item.calories}</div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{item.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-lg text-gray-900">{item.price}</span>
                  <button className="bg-brand-red text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-brand-red-dark transition-colors">
                    Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-red text-brand-red rounded-full font-bold text-lg hover:bg-brand-red hover:text-white transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
