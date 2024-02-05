import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Story = () => {
 const ref = useRef(null);
 const isInView = useInView(ref, { amount: 0.5 });
 return (
  <div ref={ref} className=" max-w-6xl mx-auto">

   <motion.div variants={{
    hidden: { x: -500, opacity: 0 },
    visible: {
     x: 0, opacity: 1, transition: {
      duration: 1,
      delayChildren: 0.4,
      staggerChildren: 0.3,
     }
    }
   }}
    initial='hidden'
    animate={isInView && 'visible'} className=" p-4">
    <motion.h1 variants={{
     hidden: { x: -200, opacity: 0 },
     visible: { x: 0, opacity: 1 }
    }}
     className=" text-4xl text-center font-bold">Ou<span className=" border-b-2 border-red-600">r s</span>tory</motion.h1>
    <motion.div className="grid sm:flex sm:justify-center sm:items-center gap-4">
     <img src="/story.png" alt="" className=" -z-10" />
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum doloribus consequatur quidem beatae earum quos, dolor voluptatibus itaque aliquam facilis quisquam officiis ducimus ipsam placeat autem aspernatur reprehenderit doloremque minima!</p>
    </motion.div>
   </motion.div>
  </div>

 );
};

export default Story;