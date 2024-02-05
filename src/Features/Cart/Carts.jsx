import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { formatCurrency } from "../../Hooks/helpers";
import SuccessBtn from "../../ui/SuccessBtn";
import ClearBtn from "../../ui/ClearBtn";
import SecondaryBtn from "../../ui/SecondaryBtn";
import { useDispatch } from "react-redux";
import { addToTicket } from "../../Slices/orderSlice";

const Carts = ({ cart }) => {
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const subtotal = cart.length < 1 ? 0 : cart?.reduce((a, b) => a + b?.total, 0);


 return (
  <>
   {cart.map(d => <CartItem key={d.id} data={d} />)}
   {cart.length < 1 && <div className=" p-4">
    <p className=" text-2xl">Please add items to the cart</p>
    <Button onClick={() => navigate('/menus')}>Menus</Button>
   </div>}

   {cart.length > 0 && <><div className=" p-4 flex justify-between ">
    <div className="  uppercase font-bold">subtotal:</div>
    <div className="font-bold">{formatCurrency(subtotal)}</div>
   </div>
    <div className=" p-4 gap-4 flex justify-center">
     <SuccessBtn onClick={() => {
      dispatch(addToTicket());
      navigate('/cart/receipt');
     }}>Check out</SuccessBtn>
     <ClearBtn />
     <SecondaryBtn onClick={() => navigate(-1)} >Back &larr;</SecondaryBtn>
    </div></>}
  </>
 );
};

export default Carts;