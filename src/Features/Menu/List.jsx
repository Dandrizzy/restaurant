import { useDispatch } from "react-redux";
import { addToCart } from "../../Slices/orderSlice";
import RemoveBtn from "../../ui/RemoveBtn";
import SmallBtn from "../../ui/SmallBtn";


const List = ({ data = {} }) => {
 const dispatch = useDispatch();
 const { img, name, id, added } = data;

 const handleClick = () => {
  dispatch(addToCart(id));

 };

 return (
  <div className="grid gap-2 border min-w-fit shadow-md p-2 rounded-md bg-neutral-100
  ">
   <img src={img} alt="" className=" h-10 w-10 mx-auto" />
   <p className=" py-1 uppercase text-xs font-semibold text-center ">{name}</p>
   {!added && <SmallBtn onClick={handleClick}>Add to cart</SmallBtn>}
   {added && <RemoveBtn id={id} />}
  </div>
 );
};

export default List;