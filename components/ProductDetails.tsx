'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Instagram, ChevronLeft, ChevronRight, Sparkles, Heart, Star } from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { containerVariants, itemVariants } from '@/lib/animations';
import { products } from '@/lib/products';

interface ProductDetailsProps {
  product: Product | undefined;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/" className="text-amber-300 hover:text-amber-400 font-semibold">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Dark Luxury Background Pattern */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)
          `
        }}
      />

      {/* Enhanced Navigation Header with Dark Theme */}
      <motion.header
        variants={itemVariants}
        className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-amber-400/20 z-40 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/" className="flex items-center text-amber-300 hover:text-amber-400 transition-colors">
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                <span className="font-semibold text-sm sm:text-base">Back to Collections</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300">
                Aaruthra Creations
              </Link>
            </motion.div>
            
            <div className="w-20 sm:w-32" /> {/* Spacer for centering */}
          </div>
        </div>
      </motion.header>

      {/* Product Content */}
      <div className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Image Gallery */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 sm:space-y-6"
            >
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group border border-amber-400/20">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={product.gallery[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                <motion.button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 border border-amber-400/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-amber-300" />
                </motion.button>
                
                <motion.button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 border border-amber-400/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-amber-300" />
                </motion.button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-amber-200 px-3 py-1 rounded-full text-sm border border-amber-400/30">
                  {currentImageIndex + 1} / {product.gallery.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {product.gallery.map((image: string, index: number) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'border-amber-400 shadow-lg shadow-amber-400/25' 
                        : 'border-amber-400/30 hover:border-amber-400/60'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 sm:space-y-8"
            >
              {/* Product Title and Description */}
              <div>
                <motion.h1 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
                  layoutId={`title-${product.id}`}
                  style={{ 
                    textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(251, 191, 36, 0.2)'
                  }}
                >
                  {product.name}
                </motion.h1>
                
                <motion.p 
                  className="text-sm sm:text-base lg:text-lg text-amber-100/80 leading-relaxed mb-6"
                  layoutId={`description-${product.id}`}
                  style={{ 
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                  }}
                >
                  {product.description}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 p-4 sm:p-6 rounded-2xl border border-amber-400/30 backdrop-blur-sm"
                >
                  <p className="text-amber-100/70 leading-relaxed text-sm sm:text-base">
                    {product.detailedDescription}
                  </p>
                </motion.div>
              </div>

              {/* Features */}
              <motion.div
                variants={itemVariants}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-amber-400" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-center p-3 sm:p-4 bg-gray-800/50 rounded-xl shadow-sm border border-amber-400/20 hover:shadow-md hover:border-amber-400/40 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                      whileHover={{ scale: 1.02, x: 5 }}
                      onClick={() => setSelectedFeature(index)}
                    >
                      <Star className={`w-4 h-4 mr-3 ${selectedFeature === index ? 'text-amber-400' : 'text-amber-400/60'}`} />
                      <span className="text-amber-100/80 font-medium text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Occasions */}
              <motion.div
                variants={itemVariants}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-amber-400" />
                  Perfect For
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.occasions.map((occasion: string, index: number) => (
                    <motion.span
                      key={index}
                      className="px-3 sm:px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-200 rounded-full font-medium border border-amber-400/30 backdrop-blur-sm text-sm sm:text-base"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {occasion}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Enquire Now Button */}
              <motion.div
                variants={itemVariants}
                className="pt-6 sm:pt-8"
              >
                <motion.a
                  href="https://www.instagram.com/aaruthracreations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black py-3 sm:py-4 px-6 sm:px-8 rounded-2xl font-bold text-sm sm:text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
                  <span className="relative z-10">Enquire Now on Instagram</span>
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.a>
                
                <motion.p
                  variants={itemVariants}
                  className="text-center text-amber-100/60 mt-4 text-xs sm:text-sm"
                >
                  Connect with us for pricing, customization, and availability
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related Products Section with Dark Theme */}
      <motion.section
        variants={itemVariants}
        className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-amber-400/20"
      >
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)
            `
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12"
            variants={itemVariants}
            style={{ 
              textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(251, 191, 36, 0.2)'
            }}
          >
            You Might Also{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300">
              Love
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/product/${relatedProduct.slug}`}>
                    <div className="bg-gradient-to-br from-gray-800 via-black to-gray-700 rounded-3xl shadow-2xl overflow-hidden group-hover:shadow-amber-500/20 transition-all duration-700 transform-gpu border border-amber-400/20">
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-48 sm:h-64 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Golden Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent opacity-0 group-hover:opacity-100"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-amber-100/70 text-sm h-12 flex items-start leading-relaxed">
                          {relatedProduct.description.length > 80 
                            ? `${relatedProduct.description.substring(0, 80)}...` 
                            : relatedProduct.description
                          }
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
} 