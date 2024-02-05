import List from "./List";



const ItemList = ({ data, title }) => {
 return (
  <>
   <p className=" px-4 pt-4 uppercase font-semibold">{title}</p>
   <div className=" flex gap-4 p-4 overflow-x-scroll scroll-auto">

    {data.map(d => <List key={d.id} data={d} />)}
   </div>
  </>
 );
};

export default ItemList;