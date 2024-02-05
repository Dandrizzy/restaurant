
import { useSelector } from 'react-redux';
import Carts from '../Features/Cart/Carts';

const Cart = () => {
 const { cart } = useSelector(store => store.order);

 return (
  <div className=" max-w-6xl mx-auto pt-8">
   <Carts cart={cart} />

  </div>

 );
};

export default Cart;