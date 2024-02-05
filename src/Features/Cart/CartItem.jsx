
import { formatCurrency } from "../../Hooks/helpers";
import CartBtn from "../../ui/CartBtn";
import DeleteBtn from "../../ui/DeleteBtn";

const CartItem = ({ data = {} }) => {
 const { name, img, total, quantity, id } = data;
 return (
  <div className="grid grid-cols-3 items-center gap-2 border min-w-fit shadow-md p-4 bg-neutral-100 text-xs
  ">
   <div className=" flex items-center gap-4">
    <img src={img} alt="food" className=" h-10 w-10" />
    <p className="uppercase font-semibold">{name}</p>
   </div>
   <p className="place-self-center italic">{formatCurrency(total)}</p>
   <div className=" place-self-end flex gap-2">
    <CartBtn quantity={quantity} id={id} />
    <DeleteBtn id={id} />
   </div>
  </div>
 );
};

export default CartItem;