import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';


const Contact = () => {
 return (
  <div className=" bg-neutral-800 p-4 sm:p-10 grid justify-items-center text-center font-bold text-neutral-100 text-sm sm:text-2xl " style={{ backgroundImage: "url('/bg.png')" }}>
   <div className=" grid gap-8 backdrop-blur-sm p-4 sm:p-20 rounded-lg">
    <img src="/tomatoes.png" alt="logo" className=" mx-auto h-20 w-20
     sm:h-40 sm:w-40" />
    <p className=''>Contactless delivery available</p>
    <span className=' sm:text-4xl text-red-900 font-mono border-2 border-red-900 bg-yellow-500 rounded-full'>+234 801 345 6543</span>
    <div className="flex gap-4 sm:gap-8 justify-center items-center [&>*]:cursor-pointer">
     <FaInstagram className=' hover:text-red-900 bg-yellow-500 h-8 w-8 p-1 rounded-full hover:scale-125 transition-all duration-500 ease-in-out hover:rotate-[360deg] border border-red-900' />
     <FaTwitter className=' hover:text-red-900 bg-yellow-500 h-8 w-8 p-1 rounded-full hover:scale-125 transition-all duration-500 ease-in-out hover:rotate-[360deg] border border-red-900' />
     <FaLinkedin className=' hover:text-red-900 bg-yellow-500 h-8 w-8 p-1 rounded-full hover:scale-125 transition-all duration-500 ease-in-out hover:rotate-[360deg] border border-red-900' />
     <FaFacebookF className=' hover:text-red-900 bg-yellow-500 h-8 w-8 p-1 rounded-full hover:scale-125 transition-all duration-500 ease-in-out hover:rotate-[360deg] border border-red-900' />
     <FaWhatsapp className=' hover:text-red-900 bg-yellow-500 h-8 w-8 p-1 rounded-full hover:scale-125 transition-all duration-500 ease-in-out hover:rotate-[360deg] border border-red-900' />
     <MdMail className=' hover:text-red-900 bg-yellow-500 h-8 w-8 p-1 rounded-full hover:scale-125 transition-all duration-500 ease-in-out hover:rotate-[360deg] border border-red-900' />
    </div>
   </div>

  </div>
 );
};

export default Contact;