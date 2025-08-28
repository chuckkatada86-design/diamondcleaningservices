"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Star, MapPin } from "lucide-react";
import {motion} from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm font-medium border border-amber-500/20"
            >
              <MapPin className="w-4 h-4" />
              Premium Cleaning Services in Dubai
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Luxury Cleaning
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Services Dubai
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-gray-300 leading-relaxed max-w-lg"
              >
                Transform your living space with Dubai&aposs most trusted cleaning professionals. 
                Premium apartment, villa, and maid services tailored for discerning clients.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-400">5-Star Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Available</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={scrollToBooking}
                className="bg-gradient-to-r cursor-pointer from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Now - Free Quote
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white/20 text-gray-800 cursor-pointer hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +971 XXX XXXX
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=700&fit=crop&crop=center" 
                  alt="Luxury cleaning service in Dubai"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  height={700}
                  width={600}
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-amber-500 text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  ✨ Premium Service
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm border border-white/20">
                  🏆 Dubai&aposs Best
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}