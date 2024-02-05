import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./ui/Spinner";
import './index.css';
import Receipt from "./Features/Cart/Receipt";
import Faqs from "./Pages/Faqs";
import Teams from "./Pages/Teams";
import Map from "./Features/Home/Map";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Error = lazy(() => import("./ui/Error"));
const Home = lazy(() => import("./Pages/Home"));
const Menus = lazy(() => import("./Pages/Menus"));
const Cart = lazy(() => import("./Pages/Cart"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/menus',
        element: <Menus />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/cart/receipt',
        element: <Receipt />
      },
      {
        path: '/faq',
        element: <Faqs />
      },
      {
        path: '/team',
        element: <Teams />
      },
      {
        path: '/blog',
        element: <Map />
      },
    ]
  }
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>

      <ReactQueryDevtools initialIsOpen={false} />

      <Suspense fallback={<Spinner />} >
        <RouterProvider router={router} />
      </Suspense>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 500,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#374151",
          },
        }}
      />

    </QueryClientProvider>
  );
};

export default App;