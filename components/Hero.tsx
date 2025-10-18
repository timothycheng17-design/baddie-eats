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
      <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Left side - Content */}
          <motion.div
            className="space-y-8 sm:space-y-10 md:space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

          <motion.div
            className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white dark:text-black leading-tight">
              Your Perfect
              <br />
              <span className="text-white-600 dark:text-black-600">Plus One</span>
              <br />
              On Demand
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white-600 dark:text-black-600 leading-relaxed max-w-lg">
              Book verified companions for your events. Professional support, VIP access, and memory capture - all through our mobile app.
            </p>
          </motion.div>
          
          <motion.div
            className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={scrollToWaitlist}
              className="group inline-flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 bg-white dark:bg-black text-black dark:text-white font-semibold text-base sm:text-lg md:text-xl hover:bg-white-100 dark:hover:bg-black-800 transition-all duration-300 border-2 border-white dark:border-black rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <span className="px-1 sm:px-2">Join Waitlist</span>
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-12 pt-8 sm:pt-12 md:pt-16 lg:pt-20 border-t border-white-200 dark:border-black-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white dark:text-black">500+</div>
              <div className="text-xs sm:text-sm text-white-600 dark:text-black-600">Verified Companions</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white dark:text-black">10K+</div>
              <div className="text-xs sm:text-sm text-white-600 dark:text-black-600">Events Booked</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white dark:text-black">4.9★</div>
              <div className="text-xs sm:text-sm text-white-600 dark:text-black-600">User Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - App Mockups */}
        <motion.div
          className="relative mt-6 sm:mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Phone mockup 1 - Browse with custom image */}
          <motion.div
            className="relative z-10 w-40 sm:w-48 md:w-56 lg:w-64 h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl mx-auto lg:mx-0"
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
            className="absolute top-2 sm:top-4 md:top-6 lg:top-8 right-0 lg:right-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-[256px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[450px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-xl"
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
              <div className="absolute top-2 sm:top-4 md:top-6 lg:top-8 left-1 sm:left-2 md:left-3 lg:left-4 right-1 sm:right-2 md:right-3 lg:right-4">
                <div className="bg-black/60 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-lg border border-white/20">
                  <div className="text-center">
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white">$50/hr</div>
                    <div className="text-xs sm:text-sm text-white/80">Base Rate</div>
                  </div>
                </div>
              </div>

              {/* Checkout Calculation Popup */}
              <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1 sm:left-2 md:left-3 lg:left-4 right-1 sm:right-2 md:right-3 lg:right-4">
                <motion.div
                  className="bg-black/60 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-lg border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2 md:mb-3">Checkout Summary</div>
                  
                  <div className="space-y-0.5 sm:space-y-1 md:space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-white">2 hours × $50/hr</span>
                      <span className="text-white font-semibold">$100.00</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-white">Service fee</span>
                      <span className="text-white font-semibold">$15.00</span>
                    </div>
                    
                    <div className="border-t border-white/20 pt-0.5 sm:pt-1 md:pt-2 mt-0.5 sm:mt-1 md:mt-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-white">Total</span>
                        <span className="text-white">$115.00</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-1 sm:mt-2 md:mt-3 lg:mt-4 bg-white text-black py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-md sm:rounded-lg md:rounded-xl font-semibold hover:bg-white/90 transition-colors duration-300 text-xs sm:text-sm">
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
