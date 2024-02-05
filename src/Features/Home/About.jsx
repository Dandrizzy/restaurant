import { FaRegCircleCheck } from "react-icons/fa6";

const About = () => {
 return (
  <div className="max-w-6xl mx-auto p-4 bg-no-repeat  ">
   <img src='/man.jpg' alt="img" className=" rounded-full h-32 w-32 mx-auto" />
   <h1 className=" text-red-900 py-2 font-bold">Company X</h1>
   <p className=" pb-6 lg:text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quis porro alias eaque cumque aliquam tempore assumenda voluptatum ratione laboriosam sunt tempora beatae obcaecati odio eligendi dolorem, quod dignissimos vitae suscipit ab nulla optio similique corporis quaerat. Voluptatem deserunt ea natus nulla, temporibus magni dolore quasi commodi sint voluptates officiis optio neque aliquam ratione totam accusantium earum voluptate numquam aperiam atque ipsum, itaque vitae enim. Beatae, qui!</p> <hr />
   <div className=" grid ">

    <div className="">
     <h2 className=" py-6">What we do?</h2>
     <ul className=" grid md:grid-cols-2">
      <li className=" flex items-center p-4 gap-8">
       <FaRegCircleCheck className=" text-red-900" />
       best chefs
      </li>
      <li className=" flex items-center p-4 gap-8">
       <FaRegCircleCheck className=" text-red-900" />
       best chefs
      </li>
      <li className=" flex items-center p-4 gap-8">
       <FaRegCircleCheck className=" text-red-900" />
       best chefs
      </li>
      <li className=" flex items-center p-4 gap-8">
       <FaRegCircleCheck className=" text-red-900" />
       best chefs
      </li>
      <li className=" flex items-center p-4 gap-8">
       <FaRegCircleCheck className=" text-red-900" />
       best chefs
      </li>
      <li className=" flex items-center p-4 gap-8">
       <FaRegCircleCheck className=" text-red-900" />
       best chefs
      </li>
     </ul>
    </div>
    <video src="/vid.mp4" controls autoPlay ></video>
   </div>
  </div>
 );
};

export default About;