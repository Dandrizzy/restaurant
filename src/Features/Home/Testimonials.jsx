import { motion, useAnimationControls, useInView } from "framer-motion";
import { container, left, right } from "../../data/data";
import { useRef } from "react";

const Testimonials = () => {
  const ref = useRef(null);
  const wide = useAnimationControls();
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref}>

      <motion.div variants={
        container
      } initial='hidden' animate={`${isInView && 'visible'}`} className="p-4 pb-8">
        <div
          onMouseEnter={() => wide.start('final')}
          onMouseLeave={() => wide.start('initial')}
          className=" text-4xl text-center font-bold">
          <p>What our client say</p>
          <motion.div variants={{
            initial: { width: '2.5rem' },
            final: { width: '10rem', transition: { duration: 1, type: 'spring' } }

          }} initial='initial' animate={wide} className=" rounded-sm h-1 bg-red-900 mx-auto my-4"></motion.div>
        </div>

        <motion.div variants={container}
          initial='hidden'
          animate='visible' className=" pt-4 gap-8 lg:flex lg:justify-between lg:items-center">


          <motion.div variants={left} className="bg-neutral-100 grid p-4 shadow-lg drop-shadow-md rounded-md">
            <div className="flex gap-4">
              <img src="/female.jpg" alt="clara" className=" w-20 h-20 rounded-full " />
              <div className="grid grid-rows-[auto_auto]">
                <p className=" font-bold text-lg text-red-900">Clara <br /><span className=" font-light text-sm text-neutral-700">Customer</span></p>

              </div>
            </div>
            <p className=" text-neutral-500 py-4">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita, tenetur debitis unde sint aliquam corrupti, qui assumenda, vel non autem dolore quaerat nobis.&quot;</p>
          </motion.div>

          <motion.div variants={right} className="bg-neutral-100 my-8 grid p-4 shadow-lg drop-shadow-md rounded-md">
            <div className="flex gap-4">
              <img src="/male.jpg" alt="John" className=" w-20 h-20 rounded-full " />
              <div className="grid grid-rows-[auto_auto]">
                <p className=" font-bold text-lg text-red-900">John <br /><span className=" font-light text-sm text-neutral-700">Customer</span></p>

              </div>
            </div>
            <p className=" text-neutral-500 py-4">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita, tenetur debitis unde sint aliquam corrupti, qui assumenda, vel non autem dolore quaerat nobis.&quot;</p>
          </motion.div>

          <motion.div variants={left} className="bg-neutral-100 grid p-4 shadow-lg drop-shadow-md rounded-md">
            <div className="flex gap-4">
              <img src="/man.jpg" alt="kelvin" className=" w-20 h-20 rounded-full " />
              <div className="grid grid-rows-[auto_auto]">
                <p className=" font-bold text-lg text-red-900">Kelvin <br /><span className=" font-light text-sm text-neutral-700">Customer</span></p>

              </div>
            </div>
            <p className=" text-neutral-500 py-4">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita, tenetur debitis unde sint aliquam corrupti, qui assumenda, vel non autem dolore quaerat nobis.&quot;</p>
          </motion.div>

        </motion.div>

      </motion.div>
    </div>);
};

export default Testimonials;