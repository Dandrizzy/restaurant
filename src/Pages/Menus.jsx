import { useSelector } from "react-redux";
import ItemList from "../Features/Menu/ItemList";
import Menu from "../Features/Menu/Menu";
import Search from "../ui/Search";


const Menus = () => {
 const { menus, category } = useSelector(store => store.order);


 const filteredCategory = (title) => {
  const cat = category.find(item => item.name === title);
  return cat.isActive;
 };

 const filteredMeal = (title) => {
  const food = menus.filter(item => item.category === title);
  return food;
 };


 return (
  <div className=" pt-8">
   <Search />
   <Menu />
   {filteredCategory('rice') && <ItemList data={filteredMeal('rice')} title='Rice' />}
   {filteredCategory('meat') && <ItemList data={filteredMeal('meat')} title='meat' />}
   {filteredCategory('swallow') && <ItemList data={filteredMeal('swallow')} title='swallow' />}
   {filteredCategory('soup') && <ItemList data={filteredMeal('soup')} title='soup' />}
   {filteredCategory('sauce') && <ItemList data={filteredMeal('sauce')} title='sauce' />}
  </div>
 );
};

export default Menus;