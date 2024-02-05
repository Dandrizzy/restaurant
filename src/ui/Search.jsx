import { useForm } from 'react-hook-form';
import { MdSearch } from 'react-icons/md';
import { Form } from 'react-router-dom';

const Search = () => {
 const { handleSubmit, register } = useForm();
 const onSubmit = data => {
  console.log(data);
 };

 return (
  <div className=' p-4'>
   <Form onSubmit={handleSubmit(onSubmit)} className="inline-flex items-center border-2 border-red-700 rounded-full pl-2 ">
    <input type="text" {...register('search', { minLength: 3, required: true })} className=" outline-none bg-transparent  px-4 py-2 rounded-l-full" placeholder="Search..." />
    <button type='submit' className='outline-none ring-0 bg-red-900 text-red-50 p-1'>

     <MdSearch className=' text-4xl rounded-r-full border-l-0 ' />
    </button>
   </Form>
  </div>
 );
};

export default Search;