'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import { cardVariants } from '@/lib/animations';
import { useState, useRef } from 'react';

interface Card3DProps {
  product: Product;
  index: number;
}

export default function Card3D({ product, index }: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(20px)
      scale3d(1.05, 1.05, 1.05)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
    setIsHovered(false);
  };

  // Truncate description to ensure consistent card heights
  const truncatedDescription = product.description.length > 85 
    ? `${product.description.substring(0, 85)}...` 
    : product.description;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer w-full"
      style={{ 
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/product/${product.slug}`} className="block w-full h-full">
        <div className="relative w-full h-[450px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-amber-500/20 transition-all duration-700 transform-gpu bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-amber-400/20">
          {/* Dark Luxury Background with Golden Accents */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-800/90"
            style={{ transform: 'translateZ(-10px)' }}
          />
          
          {/* Golden Shimmer Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut",
              delay: 0.1
            }}
            style={{ transform: 'translateZ(5px)' }}
          />

          {/* Image Container with 3D Effect - Fixed Height */}
          <div className="relative h-56 sm:h-64 overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              style={{ transform: 'translateZ(10px)' }}
              whileHover={{ 
                scale: 1.1,
                rotateZ: 2
              }}
              transition={{ duration: 0.6 }}
            />
            

            
            {/* Dark Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
              style={{ transform: 'translateZ(8px)' }}
            />
          </div>

          {/* Content Section with Fixed Layout - Dark Theme */}
          <div className="relative flex flex-col h-[194px] sm:h-[216px] p-4 sm:p-6">
            {/* Text Content Area */}
            <div className="flex-1 min-h-0">
              <motion.div
                style={{ transform: 'translateZ(15px)' }}
                className="h-full flex flex-col"
              >
                <motion.h3 
                  className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.02 }}
                  style={{ 
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                  }}
                >
                  {product.name}
                </motion.h3>
                
                <motion.p 
                  className="text-amber-100/70 text-sm leading-relaxed flex-1 min-h-[48px] sm:min-h-[60px]"
                  style={{ 
                    transform: 'translateZ(12px)',
                    textShadow: '0 1px 5px rgba(0,0,0,0.5)'
                  }}
                >
                  {truncatedDescription}
                </motion.p>
              </motion.div>
            </div>

            {/* Action Button - Always Visible at Bottom */}
            <motion.div
              className="mt-3 sm:mt-4 pt-2 border-t border-amber-400/20"
              style={{ transform: 'translateZ(18px)' }}
            >
              <motion.div 
                className="inline-flex items-center text-sm font-semibold text-amber-300 transition-colors duration-300"
                whileHover={{ 
                  x: 5,
                  scale: 1.05
                }}
                transition={{ duration: 0.2 }}
              >
                <span>Explore Details</span>
                <motion.svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Golden Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-amber-400/10 via-yellow-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100"
            style={{ 
              transform: 'translateZ(25px)',
              background: 'linear-gradient(45deg, transparent, rgba(251, 191, 36, 0.1), transparent)'
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Floating Particles on Hover */}
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-amber-400 rounded-full"
                  style={{
                    left: `${20 + (i * 12)}%`,
                    top: `${30 + (i * 8)}%`,
                    transform: 'translateZ(30px)'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -50, -100],
                    x: [0, Math.sin(i) * 20, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}
        </div>
      </Link>
    </motion.div>
  );
} 