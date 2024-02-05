
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Brand from './Brand';
import UserBasket from './UserBasket';
import Footer from './Footer';

function AppLayout() {


  return (
    <div className="">
      <div className=" " >
        <div className="backdrop-blur-xl rounded-full bg-white/30 sticky top-8 z-50 mx-4 ">

          <div className=" text-neutral-800 flex justify-between items-start p-4 shadow-md rounded-full">
            <Brand />
            <div className="hidden sm:block">
              <Nav />
            </div>
            <UserBasket />
          </div>
        </div>

        <div className="overflow-auto">
          <main className="">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
