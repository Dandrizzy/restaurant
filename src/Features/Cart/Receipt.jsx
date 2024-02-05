import { formatCurrency } from "../../Hooks/helpers";
import { useOrder } from "../../Hooks/useOrder";
import { useCart } from "./useCart";

const Receipt = () => {
 const { ticket } = useOrder();
 const { subtotal } = useCart();
 const serviceFee = 200;
 return (
  <div className="border-t-4 pt-2 border-dashed border-red-900 divide-y-2 text-sm uppercase divide-red-900 bg-red-200 bg-center" style={{ backgroundImage: 'url("/bg.png")' }}>

   <div className="grid grid-cols-3 px-4 py-2 pb-6">
    <div className="">Item</div>
    <div className=" place-self-center">Quantity</div>
    <div className=" place-self-end">Total</div>
   </div>

   {ticket.cart.map((item) => <div key={item.id} className="px-4 py-1 grid grid-cols-3">
    <div className="">{item.name}</div>
    <div className=" place-self-center">{item.quantity}</div>
    <div className=" place-self-end">{formatCurrency(item.total)}</div>
   </div>)}

   <div className=" p-4 flex justify-between ">
    <div className="  uppercase font-semibold">subtotal:</div>
    <div className="font-semibold">{formatCurrency(subtotal)}</div>
   </div>

   <div className=" p-4 flex justify-between ">
    <div className="  uppercase font-semibold">service fee:</div>
    <div className="font-semibold">{formatCurrency(serviceFee)}</div>
   </div>

   <div className=" p-4 flex justify-between ">
    <div className="  uppercase font-bold">total:</div>
    <div className="font-bold">{formatCurrency(subtotal + 200)}</div>
   </div>
  </div>
 );
};

export default Receipt;