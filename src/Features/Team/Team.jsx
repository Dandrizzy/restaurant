const data = [
 {
  id: 1, img: '/male.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti porro quia distinctio natus unde vero sit, dolores architecto illum accusantium earum reiciendis aliquid libero.  Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint totam in placeat, consequatur fugit explicabo recusandae tenetur, suscipit repellat, delectus similique! A ducimus beatae quia rerum eius error aliquam, dolorum culpa porro, modi magni quidem natus dolores quam voluptates iste cumque distinctio perspiciatis quasi? Odio laudantium in nostrum dolore.', color: 'red'
 },
 {
  id: 2, img: '/male.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti porro quia distinctio natus unde vero sit, dolores architecto illum accusantium earum reiciendis aliquid libero.  Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint totam in placeat, consequatur fugit explicabo recusandae tenetur, suscipit repellat, delectus similique! A ducimus beatae quia rerum eius error aliquam, dolorum culpa porro, modi magni quidem natus dolores quam voluptates iste cumque distinctio perspiciatis quasi? Odio laudantium in nostrum dolore.', color: 'blue'
 },
 {
  id: 3, img: '/male.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti porro quia distinctio natus unde vero sit, dolores architecto illum accusantium earum reiciendis aliquid libero.  Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint totam in placeat, consequatur fugit explicabo recusandae tenetur, suscipit repellat, delectus similique! A ducimus beatae quia rerum eius error aliquam, dolorum culpa porro, modi magni quidem natus dolores quam voluptates iste cumque distinctio perspiciatis quasi? Odio laudantium in nostrum dolore.', color: 'sky'
 },
 {
  id: 4, img: '/male.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti porro quia distinctio natus unde vero sit, dolores architecto illum accusantium earum reiciendis aliquid libero.  Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint totam in placeat, consequatur fugit explicabo recusandae tenetur, suscipit repellat, delectus similique! A ducimus beatae quia rerum eius error aliquam, dolorum culpa porro, modi magni quidem natus dolores quam voluptates iste cumque distinctio perspiciatis quasi? Odio laudantium in nostrum dolore.', color: 'yellow'
 }
];

const Team = () => {
 return (
  <div className=" p-4">
   <div className="">
    <h1 className=" pb-2 uppercase font-bold text-2xl">Meet our team</h1>

    <p className=" pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, dolor!</p>
    <div className=" grid sm:grid-cols-3 lg:grid-cols-4">

     {data.map(item => <div key={item.id} className=" bg-sky-200 mb-4 sm:mr-4 p-4 odd:rotate-1">
      <img src={item.img} alt="team" className=" rounded-full mx-auto pb-4 w-40 h-40" />
      <p className=" text-justify">{item.description}</p>
     </div>)}
    </div>
   </div>
  </div>
 );
};

export default Team;