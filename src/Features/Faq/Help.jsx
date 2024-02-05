import Input from "../../ui/Input";

const Help = () => {
 return (
  <div className="p-4 text-red-500 text-center max-w-6xl mx-auto">
   <div>How can we help you?</div>
   <Input type="text" placeholder="Type keywords to find answers" />
  </div>
 );
};

export default Help;