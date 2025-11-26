// motionVariants.js
export const fadeUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 },
  },
};

// motionVariants.js
export const fadeDown = {
  hidden: { opacity: 0, y: -60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -80, rotate: -2 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 90, damping: 20, duration: 0.9 },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 80, rotate: 2 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 90, damping: 20, duration: 0.9, delay: 0.2 },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};
