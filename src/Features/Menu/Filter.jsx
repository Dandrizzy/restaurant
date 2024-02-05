import { useDispatch, useSelector } from "react-redux";
import { active } from "../../Slices/orderSlice";

const Filter = () => {
 const dispatch = useDispatch();
 const { category } = useSelector(store => store.order);
 return (
  <div className=" flex gap-4 items-center scroll-auto  overflow-x-scroll p-4 text-neutral-100">

   {
    category.map(menu => {
     return <div key={menu.id} className={` min-w-[83px] shadow-lg text-neutral-400 inline-flex items-center rounded-lg text-center hover:bg-red-800 hover:text-neutral-100 transition-colors duration-300` + ` ${menu.isActive && ' bg-red-900'}`} onClick={() => dispatch(active(menu.id))}>
      <div className=" p-2 mx-auto">
       <img src="/veg.png" alt="veg" className=" w-10 h-10 mx-auto mb-1" />
       <p className=" uppercase text-xs text-center">{menu.name
       }</p>
      </div>
     </div>;
    })
   }

  </div >
 );
};

export default Filter;