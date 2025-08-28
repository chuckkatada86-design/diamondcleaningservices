"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: 'Sarah Al-Mansouri',
    location: 'Downtown Dubai',
    rating: 5,
    text: 'Absolutely exceptional service Diamond Clean transformed our apartment beyond expectations. The attention to detail is remarkable, and the team is so professional. Highly recommend for anyone seeking premium cleaning in Dubai.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'James Wilson',
    location: 'Dubai Marina',
    rating: 5,
    text: 'Been using Diamond Clean for our villa for over a year now. Consistent quality, reliable timing, and they use eco-friendly products which is important to us. The best cleaning service in Dubai, hands down.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Fatima Hassan',
    location: 'Jumeirah',
    rating: 5,
    text: 'Their maid service has been a game-changer for our busy family. Trustworthy, thorough, and flexible with scheduling. I can finally relax knowing my home is in expert hands. Worth every dirham!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="block text-amber-600">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apost just take our word for it. Here&aposs what Dubai residents say about 
            our premium cleaning services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden group">
                {/* Decorative Quote */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-amber-500" />
                </div>
                
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                    &quot{testimonial.text}&quot
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-14 h-14 object-cover rounded-full ring-2 ring-amber-200"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-500 font-medium">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
            </div>
            <p className="text-gray-600 font-medium">
              Based on 150+ verified reviews from our valued clients
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}