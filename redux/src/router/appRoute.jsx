import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from '../layout/MainLayout'
import AuthLayout from "../layout/authLayout"
import Login from "../auth/Login"
import Register from "../auth/Register"
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Products from '../pages/Products';
import { useDispatch } from "react-redux"
import { addUser } from "../features/authSlice"
import { useEffect } from "react"




function AppRoute() {
      let dispatch = useDispatch()
      

  const hydrateUser = () => {
    const loggedUser = JSON.parse(
      localStorage.getItem("userLoggedIn")
    );

    if (!loggedUser) {
      console.log("User invalid");
      return;
    }

    dispatch(addUser(loggedUser));
  };

  useEffect(() => {
    hydrateUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




    const router = createBrowserRouter([
        {
            path: "/",
            element: <AuthLayout />,
            children:[
                {
                    path: "/login",
                    element: <Login />
                }, 
                {
                    path: "/register",
                    element: <Register />
                }

            ]
        }, 
        {
            path: "main",
            element: <MainLayout/>, 
            children:[
                {
                    path: "home",
                    element: <Home />
                },
                {
                    path: "shop",
                    element: <Shop />
                },
                {
                    path: "products",
                    element: <Products />

                }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoute

