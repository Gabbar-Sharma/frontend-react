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
import { useEffect } from "react";
import { hydrationApi } from "../features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { addUser, finishLoading } from "../features/auth/state/auth/authSlice";


function AppRoute() {

  const dispatch = useDispatch()

  useEffect(() =>{
         const hydrate = async() =>{
             try{
              const user = await hydrationApi()
              if(user){
                dispatch(addUser(user))
              }
              else{
                dispatch(finishLoading())
              }
             }catch(error){
              console.log('error in hydrate', error)
              localStorage.removeItem("accessToken");
              dispatch(finishLoading())
             }
         } 
         hydrate()
  }, [dispatch])
  


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
