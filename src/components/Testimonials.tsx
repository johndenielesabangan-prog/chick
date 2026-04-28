import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Hands down the best chicken sandwich I've ever had. The line was long but moved incredibly fast, and the staff was so friendly!",
    author: "Sarah Jenkins",
    role: "Local Guide",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    content: "My kids absolutely love the nuggets here. It's our go-to spot after soccer practice. The mobile app makes ordering ahead a breeze.",
    author: "Michael Rodriguez",
    role: "Dad of 3",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    content: "The customer service is unmatched. They always get my order right, and the sauce... don't even get me started on the sauce!",
    author: "Emily Chen",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-bold tracking-wide uppercase text-sm mb-2">Word on the Street</h2>
          <h3 className="text-4xl font-display font-bold text-gray-900 mb-4 tracking-tight">Loved by our neighbors.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 flex-grow">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4 flex-col">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mb-3"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
