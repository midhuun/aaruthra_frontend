'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Instagram, Menu, X } from 'lucide-react';
import Card3D from '@/components/Card3D';
import Loading3D from '@/components/Loading3D';
import Link from 'next/link';
import { products } from '@/lib/products';
import { containerVariants, itemVariants, heroTextVariants, floatingVariants, pageVariants } from '@/lib/animations';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Enhanced parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    // Enhanced loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // Extended for the full 3D experience

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 3D Loading Screen */}
      <Loading3D isLoading={isLoading} />
      
      {/* Main Website Content with Dark Luxury Theme */}
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate={isLoading ? "initial" : "animate"}
        exit="exit"
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Enhanced Navigation Header with Dark Luxury Theme */}
        <motion.header
          variants={itemVariants}
          className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-amber-400/20 z-40 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300">
                  Aaruthra Creations
                </Link>
              </motion.div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-12">
                {['Home', 'Collections', 'Contact'].map((item, index) => (
                  <motion.a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-amber-100 hover:text-amber-300 font-medium text-lg relative group transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 group-hover:w-full transition-all duration-300"
                    />
                  </motion.a>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-3 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border border-amber-400/30"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-amber-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 text-amber-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden bg-black/95 backdrop-blur-xl border-t border-amber-400/20"
              >
                <div className="px-6 py-6 space-y-6">
                  {['Home', 'Collections', 'Contact'].map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-amber-100 hover:text-amber-300 font-medium text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Enhanced Hero Section with Dark Bangle Background */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Dark Hero Background Image with Parallax */}
          <motion.div
            style={{ 
              y: heroY, 
              scale: heroScale,
              backgroundImage: 'url(https://ik.imagekit.io/givrlm5nb/hero_bangle.webp?updatedAt=1753802437535)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            className="absolute inset-0"
          />
          
          {/* Dark Gradient Overlays for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
          
          {/* Luxury Golden Accent Overlays */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating decorative elements with golden theme */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-xl"
            style={{ transform: 'translateZ(10px)' }}
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-xl"
            style={{ 
              transform: 'translateZ(15px)',
              animationDelay: '2s'
            }}
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full blur-xl"
            style={{ 
              transform: 'translateZ(5px)',
              animationDelay: '4s'
            }}
          />
          
          {/* Luxury Sparkle Effects */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-300 rounded-full"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i * 5)}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotateZ: [0, 360]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
          
          <motion.div
            variants={containerVariants}
            className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Luxury Badge */}
            <motion.div
              variants={heroTextVariants}
              className="inline-flex items-center mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-400/30 mx-4"
              style={{ transform: 'translateZ(30px)' }}
            >
              <motion.div
                className="w-2 h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-amber-200 text-xs sm:text-sm font-medium tracking-wider uppercase">
                Handcrafted Excellence Since Heritage
              </span>
            </motion.div>

            <motion.h1 
              variants={heroTextVariants}
              className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
              style={{ 
                transform: 'translateZ(20px)',
                textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(251, 191, 36, 0.3)'
              }}
            >
              Where{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ 
                  transform: 'translateZ(25px)',
                  textShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
                }}
              >
                Tradition
              </motion.span>{' '}
              <br />
              Meets{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-200"
                style={{ 
                  transform: 'translateZ(25px)',
                  textShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
                }}
              >
                Elegance
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={heroTextVariants}
              className="text-base sm:text-lg lg:text-xl text-amber-100/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4"
              style={{ 
                transform: 'translateZ(15px)',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              Immerse yourself in the world of exquisite handcrafted bangles, where every piece tells a story 
              of ancient artistry and contemporary sophistication. Each creation is a testament to timeless beauty 
              and unparalleled craftsmanship.
            </motion.p>
            
            {/* Dual Action Buttons */}
            <motion.div
              variants={heroTextVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
              style={{ transform: 'translateZ(30px)' }}
            >
              <motion.a 
                href="#collections"
                className="group relative inline-flex items-center bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black px-4 sm:px-10 py-2.5 sm:py-5 rounded-full font-bold text-xs sm:text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 overflow-hidden w-auto sm:w-auto justify-center"
                whileHover={{ scale: 1.05, rotateX: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                                  <motion.span
                    className="relative z-10 mr-1 sm:mr-3"
                    whileHover={{ x: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    ✨
                  </motion.span>
                  <span className="relative z-10">Explore Collections</span>
                  <motion.svg
                    className="w-3 h-3 sm:w-5 sm:h-5 ml-1 sm:ml-3 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.a>

                              <motion.a
                  href="#contact"
                  className="group relative inline-flex items-center bg-transparent border-2 border-amber-400/60 text-amber-200 px-4 sm:px-10 py-2.5 sm:py-5 rounded-full font-semibold text-xs sm:text-lg backdrop-blur-sm hover:bg-amber-400/10 transition-all duration-500 w-auto sm:w-auto justify-center"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(251, 191, 36, 1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                                  <motion.span
                    className="mr-1 sm:mr-3"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    📱
                  </motion.span>
                  <span>Connect</span>
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
           
          </motion.div>
        </section>

                {/* Enhanced Collections Section with Dark Luxury Theme */}
        <section id="collections" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Dark Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)
              `
            }}
          />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Luxury Badge for Collections */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center mb-6 px-6 py-3 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-400/30"
                style={{ transform: 'translateZ(30px)' }}
              >
                <motion.div
                  className="w-2 h-2 bg-amber-400 rounded-full mr-3"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-amber-200 text-sm font-medium tracking-wider uppercase">
                  Masterpiece Collections
                </span>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ 
                  transform: 'translateZ(20px)',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(251, 191, 36, 0.2)'
                }}
              >
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300">
                  Exquisite
                </span>{' '}
                Collections
              </motion.h2>
              <motion.div 
                variants={itemVariants}
                className="w-32 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 mx-auto mb-6 shadow-lg"
                style={{ 
                  transform: 'translateZ(15px)',
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
                }}
              />
              <motion.p 
                variants={itemVariants}
                className="text-sm sm:text-base lg:text-lg text-amber-100/80 max-w-3xl mx-auto leading-relaxed px-4"
                style={{ 
                  transform: 'translateZ(10px)',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
              >
                Each piece in our collection is meticulously crafted by skilled artisans, 
                combining age-old techniques with contemporary design sensibilities to create 
                timeless treasures that celebrate heritage and elegance.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr px-4 sm:px-0"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {products.map((product, index) => (
                <Card3D key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

                {/* Enhanced Contact Section with Dark Luxury Theme */}
        <section id="contact" className="py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          {/* Background decorative elements with golden theme */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
              rotateZ: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transform: 'translateZ(-10px)' }}
          />
          
          {/* Additional floating elements */}
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-full blur-2xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
              rotateZ: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transform: 'translateZ(-5px)' }}
          />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Luxury Badge for Contact */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center mb-6 px-6 py-3 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-400/30"
                style={{ transform: 'translateZ(30px)' }}
              >
                <motion.div
                  className="w-2 h-2 bg-amber-400 rounded-full mr-3"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-amber-200 text-sm font-medium tracking-wider uppercase">
                  Let's Create Together
                </span>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6"
                style={{ 
                  transform: 'translateZ(20px)',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(251, 191, 36, 0.2)'
                }}
              >
                Connect With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300">
                  Elegance
                </span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-sm sm:text-base lg:text-lg text-amber-100/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
                style={{ 
                  transform: 'translateZ(15px)',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
              >
                Ready to discover your perfect piece? Connect with us on Instagram to explore our latest collections 
                and begin your journey to timeless elegance. Experience the artistry that has been passed down through generations.
              </motion.p>
              
              <motion.a
                href="https://www.instagram.com/aaruthracreations/"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="inline-flex items-center bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black px-6 sm:px-12 py-3 sm:py-5 rounded-full font-bold text-sm sm:text-lg lg:text-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 relative overflow-hidden group mx-4"
                whileHover={{ scale: 1.05, rotateX: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transform: 'translateZ(25px)' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <Instagram className="w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-4" />
                </motion.div>
                <span className="relative z-10">Follow @aaruthracreations</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.a>
            </motion.div>
          </div>
        </section>

                {/* Enhanced Footer with Dark Luxury Theme */}
        <motion.footer
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 relative overflow-hidden border-t border-amber-400/20"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Luxury Background Pattern */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-yellow-900/10"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ transform: 'translateZ(-5px)' }}
          />
          
          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-400/5 to-yellow-400/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotateZ: [0, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              {/* Footer Brand */}
              <motion.h3 
                variants={itemVariants}
                className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300"
                style={{ 
                  transform: 'translateZ(15px)',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 30px rgba(251, 191, 36, 0.3)'
                }}
              >
                Aaruthra Creations
              </motion.h3>
              
              {/* Luxury Tagline */}
              <motion.p 
                variants={itemVariants}
                className="text-amber-100/80 mb-6 text-lg font-light"
                style={{ 
                  transform: 'translateZ(10px)',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
              >
                Handcrafted Elegance • Timeless Beauty • Heritage Excellence
              </motion.p>
              
              {/* Decorative Divider */}
              <motion.div 
                variants={itemVariants}
                className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mb-8"
                style={{ 
                  transform: 'translateZ(12px)',
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
                }}
              />
              
              {/* Social Media */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-center space-x-8 mb-12"
                style={{ transform: 'translateZ(20px)' }}
              >
                <motion.a
                  href="https://www.instagram.com/aaruthracreations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-400/30 hover:bg-amber-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={28} className="text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-amber-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                    style={{ transform: 'translateZ(-1px)' }}
                  />
                </motion.a>
              </motion.div>
              
              {/* Copyright */}
              <motion.div 
                variants={itemVariants}
                className="border-t border-amber-400/20 pt-8"
                style={{ transform: 'translateZ(5px)' }}
              >
                <p className="text-amber-100/60 text-sm">
                  © 2024 Aaruthra Creations. All rights reserved. | Crafted with passion and precision.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </>
  );
}