import { motion, useAnimationControls } from "framer-motion";
import { data } from "../../data/data";
import Button from "../../ui/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Menus = () => {
 const navigate = useNavigate();
 const ref = useRef(null);
 const wide = useAnimationControls();
 return (
  <div style={{ backgroundImage: "url('/bg.png')" }} className=" p-4 bg-yellow-700/50 max-w-6xl mx-auto">

   <div onMouseEnter={() => wide.start('wide')}
    onMouseLeave={() => wide.start('initial')}
    className=" py-8 [&>#move]:hover:w-20">

    <p className=" uppercase font-mono text-4xl text-neutral-100 z-10">popular dishes</p>

    <motion.div
     variants={{
      initial: { width: '1.5rem' },
      wide: { width: '10rem', transition: { duration: 1, type: 'spring' } }
     }}
     initial='initial'
     animate={wide}
     id="move" className=" rounded-sm h-1 w-6 bg-red-900"></motion.div>

    <div className=" py-8" onClick={() => navigate('/menus')}>
     <Button >See menu &rarr;</Button>
    </div>

   </div>

   <div className=" flex items-center justify-center gap-4 sm:gap-8">
    {data.map(item => {
     return (
      <motion.div ref={ref}

       key={item.id} className=" relative [&>img]:hover:scale-125 gap-4 uppercase border-2 p-4 border-red-900 rounded-xl">

       <div className="absolute w-full bg-red-900 h-1/2 -z-10 bottom-0 left-0 rounded-lg" />

       <img
        src={item.img} alt={item.name} className=" sm:w-80 sm:h-80 h-20 w-20 " />
       <div className="pt-2">
        <p className=" text-neutral-100 font-bold pb-2">{item.name}</p>
        <p className=" italic font-light bg-neutral-200 inline-block px-2 rounded-full">N{item.price}</p>
       </div>

      </motion.div>
     );
    })}

   </div>
  </div>
 );
};

export default Menus;