"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Users, CheckCircle, Sparkles, Shield } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Home,
    title: "Apartment Cleaning",
    description: "Comprehensive cleaning for your Dubai apartment with attention to every detail. From kitchen deep cleans to bathroom sanitization.",
    features: ["Deep kitchen cleaning", "Bathroom sanitization", "Floor mopping & vacuuming", "Window cleaning", "Dusting all surfaces"],
    price: "Starting from AED 150",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Building2,
    title: "Villa Cleaning",
    description: "Premium cleaning services for Dubai villas and large homes. Our team handles properties of all sizes with professional expertise.",
    features: ["Multi-room deep cleaning", "Pool area maintenance", "Garden cleanup", "Balcony cleaning", "Marble & tile care"],
    price: "Starting from AED 350",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Maid Services",
    description: "Reliable and professional maid services for ongoing home maintenance. Flexible schedules to fit your lifestyle.",
    features: ["Weekly/monthly schedules", "Background-checked staff", "Consistent quality", "Supply management", "Flexible timing"],
    price: "Starting from AED 25/hour",
    gradient: "from-purple-500 to-pink-500"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            <Sparkles className="w-4 h-4" />
            Our Premium Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tailored Cleaning Solutions
            <span className="block text-amber-600">for Dubai Homes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the finest cleaning services in Dubai. Each service is meticulously designed 
            to meet the highest standards expected by our discerning clientele.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white overflow-hidden group">
                {/* Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                
                <CardContent className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-8 h-8 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.price}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                    Book {service.title}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-amber-400" />
            <h3 className="text-3xl font-bold">Why Choose Us?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-amber-400 mb-2">Insured & Bonded</div>
              <p className="text-gray-300">Full insurance coverage for your peace of mind</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400 mb-2">Eco-Friendly</div>
              <p className="text-gray-300">Safe, non-toxic cleaning products</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400 mb-2">Satisfaction Guarantee</div>
              <p className="text-gray-300">100% satisfaction or we return to make it right</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}