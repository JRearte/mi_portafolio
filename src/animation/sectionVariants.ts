// src/animations/sectionVariants.ts
export const sectionVariants = {
  initial: {
    opacity: 0,
    x: 80,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -80,
    transition: {
      duration: 0.35,
      ease: "easeIn",
    },
  },
};
