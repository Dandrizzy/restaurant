import { FaCartShopping, FaUser, } from 'react-icons/fa6';
import { MdClose, MdMenu } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { useState } from 'react';

const UserBasket = () => {
 const [open, setOpen] = useState(false);
 const navigate = useNavigate();
 const { cart } = useSelector(store => store.order);
 return (
  <div className=' grid '>
   <div className=' flex items-center gap-3'>
    <FaUser />
    <div className="relative cursor-pointer mr-4" onClick={() => navigate('/cart')}>
     <FaCartShopping />
     <span className=' bg-neutral-100 text-red-900 flex items-center rounded-sm h-4 w-4 absolute -top-2 p-1 -right-2 font-bold'>{cart.length}</span>
    </div>
    <div className=" sm:hidden" onClick={() => setOpen(open => !open)}>
     {open ? <MdClose /> : <MdMenu />}
    </div>
   </div>
   {open && <div className="pt-4
   ">
    <Nav />
   </div>}
  </div>
 );
};

export default UserBasket;