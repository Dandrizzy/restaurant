import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleFaq } from "../../Slices/orderSlice";
import { useOrder } from "../../Hooks/useOrder";

const Faq = () => {
 const dispatch = useDispatch();
 const { faq } = useOrder();
 return (
  <div className="max-w-6xl mx-auto">
   <div className=" p-4 font-bold text-2xl">
    Frequently Asked Question
   </div>
   <div className=" pb-4 grid lg:grid-cols-2 ">

    {faq.map(item => <div key={item.id} className="m-2 rounded-md p-4 shadow-md ">
     <div onClick={() => dispatch(toggleFaq(item.id))} className=" cursor-pointer flex justify-between font-bold">
      <h1>{item.question}</h1>
      <FaPlus />
     </div>
     {item.isOpen && <p className=" transition-all ease-in-out duration-700 py-2 text-sm">{item.answer}</p>}
    </div>)}
   </div>
  </div>
 );
};

export default Faq;