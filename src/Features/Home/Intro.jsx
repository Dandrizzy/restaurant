import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Intro = () => {

 const navigate = useNavigate();

 const ref = useRef(null);

 const { scrollYProgress } = useScroll(ref);
 const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '180deg']);

 const container = {
  hidden: {
   opacity: 1, scale: 0, rotate: '0deg'
  },
  visible: {
   opacity: 1, scale: 1, rotate: '360deg', transition: {
    duration: 0.5,
    delayChildren: 0.5,
    staggerChildren: 0.3
   }
  }
 };
 const container1 = {
  hidden: {
   opacity: 1, scale: 0, rotate: '0deg'
  },
  visible: {
   opacity: 1, scale: 1, rotate: '360deg', transition: {
    duration: 0.5,
    delayChildren: 0.7,
    staggerChildren: 0.4
   }
  }
 };

 const item = {
  hidden: { x: -90, opacity: 0 },
  visible: { x: 0, opacity: 1 }
 };
 const items = {
  hidden: { x: 90, opacity: 0 },
  visible: { x: 0, opacity: 1 }
 };

 return (
  <motion.div ref={ref} variants={container}
   initial='hidden'
   animate='visible'

   className=" p-4 min-h-screen bg-yellow-700 grid sm:grid-cols-2 text-neutral-100 font-bold font-serif text-4xl">



   <motion.div variants={item} className=" h-full flex justify-center items-center flex-col gap-8">
    <p>From our kitchen to your table - a symphony of taste crafted for your well-being</p>
    <Button onClick={() => navigate('/menus')}>Order now</Button>
   </motion.div>

   <motion.div variants={item} className=" grid">
    <motion.div variants={container1}
     initial='hidden'
     animate='visible' className="relative flex justify-center items-center">
     <motion.img variants={items} src="/tomatoes.png" alt="tomatoes" className=" absolute" />
     <motion.img variants={items} style={{ rotate }} src="/homeBG.png" alt="HomeBackground" className=" absolute rotate-12" />
     <motion.img variants={items} src="/onion.png" alt="onion" className=" absolute animate-pulse" />
     <motion.img variants={items} src="/salt.png" alt="salt" className="rotate-45 absolute animate-pulse " />
    </motion.div>
   </motion.div>

  </motion.div>
 );
};

export default Intro;