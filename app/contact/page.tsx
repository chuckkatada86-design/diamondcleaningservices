"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    property_type: '',
    message: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your inquiry! We will contact you shortly.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Get Your Free Quote
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Experience
            <span className="block text-amber-600">Premium Cleaning?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to transform 
            your space with our exceptional cleaning services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <div className="text-gray-600">+971 4 XXX XXXX</div>
                    <div className="text-gray-600">+971 50 XXX XXXX</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">WhatsApp</div>
                    <div className="text-gray-600">+971 50 XXX XXXX</div>
                    <div className="text-sm text-gray-500">Available 24/7</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <div className="text-gray-600">info@diamondcleandubai.com</div>
                    <div className="text-gray-600">booking@diamondcleandubai.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Service Areas</div>
                    <div className="text-gray-600">Dubai Marina, Downtown Dubai</div>
                    <div className="text-gray-600">Jumeirah, Business Bay & More</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Working Hours</div>
                    <div className="text-gray-600">7 Days a Week</div>
                    <div className="text-gray-600">8:00 AM - 10:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Badge */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl">
              <div className="font-bold text-lg mb-2">Emergency Cleaning?</div>
              <div className="text-red-100 mb-4">Available 24/7 for urgent cleaning needs</div>
              <Button className="bg-white text-red-600 hover:bg-red-50 font-semibold">
                Call Emergency Line
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-2xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Book Your Free Consultation
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we&aposll get back to you within 2 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="h-12 border-2 border-gray-200 focus:border-amber-500 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+971 50 XXX XXXX"
                        className="h-12 border-2 border-gray-200 focus:border-amber-500 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="h-12 border-2 border-gray-200 focus:border-amber-500 rounded-xl"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-amber-500 rounded-xl">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment Cleaning</SelectItem>
                          <SelectItem value="villa">Villa Cleaning</SelectItem>
                          <SelectItem value="maid">Maid Services</SelectItem>
                          <SelectItem value="deep">Deep Cleaning</SelectItem>
                          <SelectItem value="move">Move-in/Move-out</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Property Type
                      </label>
                      <Select value={formData.property_type} onValueChange={(value) => handleInputChange('property_type', value)}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-amber-500 rounded-xl">
                          <SelectValue placeholder="Property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="studio">Studio</SelectItem>
                          <SelectItem value="1br">1 Bedroom</SelectItem>
                          <SelectItem value="2br">2 Bedroom</SelectItem>
                          <SelectItem value="3br">3 Bedroom</SelectItem>
                          <SelectItem value="4br">4+ Bedroom</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your cleaning requirements, preferred timing, or any special requests..."
                      className="min-h-32 border-2 border-gray-200 focus:border-amber-500 rounded-xl resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Get Free Quote - Book Now
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our terms of service and privacy policy.
                    We&aposll contact you within 2 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}