'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { loadingVariants, parallaxVariants } from '@/lib/animations';

interface Loading3DProps {
  isLoading: boolean;
}

export default function Loading3D({ isLoading }: Loading3DProps) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Dark Background with Golden Luxury Pattern */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)
              `
            }}
          />

          {/* Floating Golden Background Elements */}
          <motion.div
            variants={parallaxVariants}
            animate="animate"
            className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-full blur-3xl"
            style={{ transform: 'translateZ(0)' }}
          />
          <motion.div
            variants={parallaxVariants}
            animate="animate"
            className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-full blur-2xl"
            style={{ 
              transform: 'translateZ(0)',
              animationDelay: '2s'
            }}
          />
          <motion.div
            variants={parallaxVariants}
            animate="animate"
            className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-amber-300/10 to-orange-400/10 rounded-full blur-xl"
            style={{ 
              transform: 'translateZ(0)',
              animationDelay: '4s'
            }}
          />

          {/* Main 3D Loading Content */}
          <motion.div
            variants={loadingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center relative perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* 3D Background Glow with Golden Theme */}
            <motion.div
              className="absolute -inset-20 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
                rotateZ: [0, 180, 360]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transform: 'translateZ(-20px)' }}
            />
            
            {/* Luxury Badge */}
            <motion.div
              className="inline-flex items-center mb-6 px-6 py-3 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-400/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ transform: 'translateZ(25px)' }}
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
                Handcrafted Excellence
              </span>
            </motion.div>
            
            {/* Main Logo with 3D Transform and Golden Styling */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 mb-6 relative z-10"
              initial={{ 
                y: 30, 
                opacity: 0,
                rotateX: -45,
                rotateY: -45
              }}
              animate={{ 
                y: 0, 
                opacity: 1,
                rotateX: 0,
                rotateY: 0
              }}
              transition={{ 
                delay: 0.8, 
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{ 
                transform: 'translateZ(20px)',
                textShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 40px rgba(251, 191, 36, 0.3)'
              }}
            >
              Aaruthra Creations
            </motion.h1>
            
            {/* 3D Loading Dots with Golden Theme */}
            <motion.div
              className="flex justify-center space-x-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              style={{ transform: 'translateZ(10px)' }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  style={{ 
                    transform: `translateZ(${5 + i * 2}px)`,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.3), 0 0 20px rgba(251, 191, 36, 0.3)'
                  }}
                />
              ))}
            </motion.div>
            
            {/* 3D Rotating Ring with Golden Theme */}
            <motion.div
              className="w-24 h-24 border-4 border-transparent border-t-amber-400 border-r-yellow-500 rounded-full mx-auto mb-6"
              animate={{ 
                rotateY: 360,
                rotateX: [0, 360]
              }}
              transition={{
                rotateY: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                },
                rotateX: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{ 
                transform: 'translateZ(15px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 0 30px rgba(251, 191, 36, 0.2)'
              }}
            />
            
            {/* Subtitle with 3D effect and Golden Styling */}
            <motion.p
              className="text-amber-100/80 text-lg font-light"
              initial={{ 
                opacity: 0,
                rotateX: 45
              }}
              animate={{ 
                opacity: 1,
                rotateX: 0
              }}
              transition={{ 
                delay: 2, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{ 
                transform: 'translateZ(5px)',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              Where Tradition Meets Elegance
            </motion.p>

            {/* Progress Bar with Golden Theme */}
            <motion.div
              className="w-64 h-1 bg-gray-800 rounded-full mx-auto mt-6 overflow-hidden border border-amber-400/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              style={{ transform: 'translateZ(8px)' }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ 
                  delay: 2.5,
                  duration: 2,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
                }}
              />
            </motion.div>
          </motion.div>

          {/* Floating Particles with Golden Theme */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i * 5)}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
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
        </motion.div>
      )}
    </AnimatePresence>
  );
} 