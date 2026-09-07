import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import AuthLayout from "../app/layout/AuthLayout";
import Login from "../../src/features/auth/ui/pages/Login";
import Register from "../../src/features/auth/ui/pages/Register";
import PublicRouter from "../router/PublicRouter";
import ProtectedRouter from '../router/ProtectedRouter'
import MainLayout from "../app/layout/MainLayout";
import Home from "../shared/home";
import About from "../shared/about";
import Shop from "../shared/shop";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/auth/authSlice";
import { useEffect } from "react";
function AppRoute() {
 const dispatch = useDispatch()

  const  hydration = () =>{
    const logged = JSON.parse(localStorage.getItem('userLoggedIn'))

    if(!logged){
             console.log('Something went wrong brother')
             return;
    }
    dispatch(addUser(logged))
  }

  useEffect(() =>{
    hydration()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRouter />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
          index: true,
          element: <Navigate to="/login" replace />,
        },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    //Main Layout
   {
  element: <ProtectedRouter />,
  children: [
    {
      path: "main",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
      ],
    },
  ],
},
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoute;
