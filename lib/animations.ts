import type { Variants } from 'framer-motion';

// Container animations with stagger
export const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Enhanced item animations
export const itemVariants: Variants = {
  initial: { y: 80, opacity: 0, rotateX: -15 },
  animate: { 
    y: 0, 
    opacity: 1,
    rotateX: 0,
    transition: { 
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Hero text animations
export const heroTextVariants: Variants = {
  initial: { y: 100, opacity: 0, scale: 0.8 },
  animate: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Enhanced 3D card animations
export const cardVariants: Variants = {
  initial: { 
    y: 60, 
    opacity: 0, 
    scale: 0.9,
    rotateY: -15,
    rotateX: 10
  },
  animate: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  hover: {
    y: -20,
    scale: 1.05,
    rotateY: 8,
    rotateX: -5,
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Floating animations for decorative elements
export const floatingVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

// 3D Loading animation variants
export const loadingVariants: Variants = {
  initial: { 
    scale: 0.3, 
    opacity: 0,
    rotateY: -180,
    rotateX: -45
  },
  animate: { 
    scale: 1, 
    opacity: 1,
    rotateY: 0,
    rotateX: 0,
    transition: { 
      duration: 1.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    rotateY: 180,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Page transition variants
export const pageVariants: Variants = {
  initial: { 
    opacity: 0,
    scale: 0.95,
    rotateX: -10
  },
  animate: { 
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: 1.2,
      staggerChildren: 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    rotateX: 10,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Parallax scroll variants
export const parallaxVariants: Variants = {
  animate: {
    y: [0, -50, 0],
    x: [0, 30, 0],
    scale: [1, 1.1, 1],
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
}; 