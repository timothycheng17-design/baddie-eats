'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-black dark:bg-white overflow-hidden">
      {/* Company name - centered at top */}
      <motion.div
        className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-black">
          Baddie Eats
        </h1>
      </motion.div>

      {/* Main content */}
      <div className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-24 items-center">
          {/* Left side - Content */}
          <motion.div
            className="space-y-8 sm:space-y-10 md:space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

          <motion.div
            className="space-y-6 sm:space-y-8 md:space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white dark:text-black leading-tight">
              Your Perfect
              <br />
              <span className="text-white-600 dark:text-black-600">Plus One</span>
              <br />
              On Demand
            </h1>
            
            <p className="text-lg sm:text-xl text-white-600 dark:text-black-600 leading-relaxed max-w-lg">
              Book verified companions for your events. Professional support, VIP access, and memory capture - all through our mobile app.
            </p>
          </motion.div>
          
          <motion.div
            className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={scrollToWaitlist}
              className="group inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white dark:bg-black text-black dark:text-white font-semibold text-lg sm:text-xl hover:bg-white-100 dark:hover:bg-black-800 transition-all duration-300 border-2 border-white dark:border-black rounded-2xl shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <span className="px-2">Join Waitlist</span>
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 pt-12 sm:pt-16 md:pt-20 border-t border-white-200 dark:border-black-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white dark:text-black">500+</div>
              <div className="text-xs sm:text-sm text-white-600 dark:text-black-600">Verified Companions</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white dark:text-black">10K+</div>
              <div className="text-xs sm:text-sm text-white-600 dark:text-black-600">Events Booked</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white dark:text-black">4.9★</div>
              <div className="text-xs sm:text-sm text-white-600 dark:text-black-600">User Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - App Mockups */}
        <motion.div
          className="relative mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Phone mockup 1 - Browse with custom image */}
          <motion.div
            className="relative z-10 w-48 sm:w-56 md:w-64 h-[400px] sm:h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl mx-auto lg:mx-0"
            initial={{ scale: 0.8, rotateY: -15 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src="https://cdn.prod.website-files.com/638a87c310a6ce44b8401b42/638b6d889a16188566a0cef4_61fdb5518ead7202ef3a67d5_image-1-mockup-more-perks-delivery-template.png"
              alt="App interface mockup"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Phone mockup 2 - Booking with custom image */}
          <motion.div
            className="absolute top-4 sm:top-6 md:top-8 right-0 lg:right-0 w-40 sm:w-48 md:w-56 lg:w-64 h-[320px] sm:h-[360px] md:h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden shadow-xl"
            initial={{ scale: 0.8, rotateY: 15, opacity: 0 }}
            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <img
              src="https://i1.sndcdn.com/artworks-jW5e9FnKqfiTomPC-VxBQVw-t500x500.png"
              alt="App booking interface"
              className="w-full h-full object-cover"
            />
            
            {/* Price UI and Checkout Popup Overlay */}
            <div className="absolute inset-0">
              {/* Price Display */}
              <div className="absolute top-4 sm:top-6 md:top-8 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4">
                <div className="bg-black/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg border border-white/20">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">$50/hr</div>
                    <div className="text-xs sm:text-sm text-white/80">Base Rate</div>
                  </div>
                </div>
              </div>

              {/* Checkout Calculation Popup */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4">
                <motion.div
                  className="bg-black/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">Checkout Summary</div>
                  
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-white">2 hours × $50/hr</span>
                      <span className="text-white font-semibold">$100.00</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-white">Service fee</span>
                      <span className="text-white font-semibold">$15.00</span>
                    </div>
                    
                    <div className="border-t border-white/20 pt-1 sm:pt-2 mt-1 sm:mt-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-white">Total</span>
                        <span className="text-white">$115.00</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-2 sm:mt-3 md:mt-4 bg-white text-black py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white/90 transition-colors duration-300 text-xs sm:text-sm">
                    Book Now
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 bg-white-200 dark:bg-black-200 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-6 h-6 bg-white-300 dark:bg-black-300 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
        </div>
      </div>
    </section>
  );
}
