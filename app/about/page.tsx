"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Award, Clock, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { icon: Users, number: "500+", label: "Satisfied Clients", color: "text-blue-500" },
  { icon: Clock, number: "5+", label: "Years Experience", color: "text-green-500" },
  { icon: Award, number: "50+", label: "5-Star Reviews", color: "text-amber-500" },
  { icon: MapPin, number: "7", label: "Emirates Covered", color: "text-purple-500" }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                About Diamond Clean Dubai
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dubai&aposs Premier
                <span className="block text-amber-600">Cleaning Specialists</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in Dubai with a passion for perfection, Diamond Clean has become the 
                  city&aposs most trusted name in luxury cleaning services. We understand the unique 
                  needs of Dubai residents and deliver exceptional results that exceed expectations.
                </p>
                <p>
                  Our team of highly trained professionals uses premium eco-friendly products and 
                  state-of-the-art equipment to ensure your home sparkles like a diamond. From 
                  high-rise apartments to sprawling villas, we treat every space with the utmost care.
                </p>
                <p>
                  Licensed and insured, we serve clients across all seven emirates, building 
                  lasting relationships based on trust, reliability, and uncompromising quality.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 rounded-2xl"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-xl">
              Learn More About Us
            </Button>
          </motion.div>

          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center" 
                alt="Professional cleaning team in Dubai"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                fill    
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Available Now</span>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                  alt="Team member"
                  className="w-12 h-12 object-cover rounded-full"
                  fill
                />
                <div>
                  <div className="font-semibold text-gray-900">Ahmed Al-Rashid</div>
                  <div className="text-sm text-gray-600">Cleaning Specialist</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Excellence in every detail. Your home deserves our best.
              </p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-amber-400 rounded-full"></div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}