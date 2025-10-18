'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-black dark:bg-white overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
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
      <div className="min-h-screen flex flex-col justify-center py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        {/* Full-width headline - optimized for mobile */}
        <motion.div
          className="w-full text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-4 sm:px-6 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white dark:text-black leading-tight">
            Your Perfect
            <br />
            <span className="text-white-600 dark:text-black-600">Plus One</span>
            <br />
            On Demand
          </h1>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center px-4 sm:px-6 md:px-8">
          {/* Left side - Content - Mobile optimized */}
          <motion.div
            className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white-600 dark:text-black-600 leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                Book verified companions for your events. Professional support, VIP access, and memory capture - all through our mobile app.
              </p>
            </motion.div>
            <motion.div
              className="pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-6 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={scrollToWaitlist}
                className="group inline-flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2.5 sm:py-3 md:py-4 lg:py-5 xl:py-6 bg-white dark:bg-black text-black dark:text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl hover:bg-white-100 dark:hover:bg-black-800 transition-all duration-300 border-2 border-white dark:border-black rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <span className="px-1 sm:px-2">Join Waitlist</span>
                <ArrowRight className="ml-2 sm:ml-3 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Stats - Mobile optimized */}
            <motion.div
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 border-t border-white-200 dark:border-black-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white dark:text-black">500+</div>
                <div className="text-xs sm:text-sm text-white-600 dark:text-black-600">Verified Companions</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white dark:text-black">10K+</div>
                <div className="text-xs sm:text-sm text-white-600 dark:text-black-600">Events Booked</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white dark:text-black">4.9★</div>
                <div className="text-xs sm:text-sm text-white-600 dark:text-black-600">User Rating</div>
              </div>
            </motion.div>
          </motion.div>

        {/* Right side - App Mockups - Mobile optimized */}
        <motion.div
          className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-0 flex justify-center lg:justify-start px-4 sm:px-6 md:px-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Phone mockups container - Mobile responsive */}
          <div className="relative flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6">
            {/* Phone mockup 1 - Browse with custom image - Mobile optimized */}
            <motion.div
              className="relative z-10 w-40 sm:w-48 md:w-60 lg:w-72 xl:w-84 2xl:w-96 h-[320px] sm:h-[384px] md:h-[480px] lg:h-[540px] xl:h-[600px] 2xl:h-[675px] rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.75rem] lg:rounded-[2rem] overflow-hidden shadow-2xl"
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

            {/* Phone mockup 2 - Booking with custom image - Mobile optimized */}
            <motion.div
              className="relative w-36 sm:w-42 md:w-54 lg:w-66 xl:w-78 2xl:w-90 h-[288px] sm:h-[336px] md:h-[432px] lg:h-[486px] xl:h-[540px] 2xl:h-[594px] rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.75rem] lg:rounded-[2rem] overflow-hidden shadow-xl"
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
          </div>

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
