import React from "react";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-lg">D</span>
              </div>
              <div>
                <div className="text-2xl font-bold">Diamond Clean Dubai</div>
                <div className="text-amber-400 font-medium">Premium Cleaning Services</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-lg">
              Dubai&aposs most trusted premium cleaning service company. We specialize in 
              apartment cleaning, villa maintenance, and professional maid services 
              across all seven emirates.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <div className="space-y-3">
              <div className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                Apartment Cleaning
              </div>
              <div className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                Villa Cleaning
              </div>
              <div className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                Maid Services
              </div>
              <div className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                Deep Cleaning
              </div>
              <div className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                Move-in/Move-out
              </div>
              <div className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                Post Construction
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">+971 4 XXX XXXX</div>
                  <div className="text-sm text-gray-400">Main Line</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">+971 50 XXX XXXX</div>
                  <div className="text-sm text-gray-400">WhatsApp 24/7</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">info@diamondcleandubai.com</div>
                  <div className="text-sm text-gray-400">General Inquiries</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">Serving All Dubai</div>
                  <div className="text-sm text-gray-400">Marina, Downtown, Jumeirah</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">7 Days a Week</div>
                  <div className="text-sm text-gray-400">8:00 AM - 10:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-center md:text-left">
            © 2024 Diamond Clean Dubai. All rights reserved. Licensed & Insured Cleaning Services.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <div className="hover:text-amber-400 transition-colors cursor-pointer">Privacy Policy</div>
            <div className="hover:text-amber-400 transition-colors cursor-pointer">Terms of Service</div>
            <div className="hover:text-amber-400 transition-colors cursor-pointer">Service Areas</div>
          </div>
        </div>
      </div>
    </footer>
  );
}