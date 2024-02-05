export const data = [
  {
    id: 1,
    name: 'Rice',
    price: 1000,
    img: '/chips.png',
  },
  {
    id: 2,
    name: 'Burger',
    price: 1500,
    img: '/burger.png',
  },
  {
    id: 3,
    name: 'chips',
    price: 800,
    img: '/hamburger.png',
  },
];

export const container = {
  hidden: {
    opacity: 0,
    scale: 0,
    // rotate: '0deg',
  },
  visible: {
    opacity: 1,
    scale: 1,
    // rotate: '360deg',
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.3,
      type: 'spring',
    },
  },
};

export const left = {
  hidden: { x: -90, opacity: 0, scale: 0 },
  visible: { x: 0, opacity: 1, scale: 1 },
};
export const right = {
  hidden: { x: 90, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export const bottom = {
  hidden: { y: 90, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
