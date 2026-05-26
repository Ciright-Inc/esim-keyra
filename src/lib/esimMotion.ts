export const easePremium = [0.22, 1, 0.36, 1] as const;

export const motionFg = { duration: 0.3, ease: easePremium };
export const motionMg = { duration: 0.5, ease: easePremium };
export const motionBg = { duration: 0.7, ease: easePremium };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easePremium },
  },
} as const;

export const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
} as const;

export const staggerChild = fadeUp;
