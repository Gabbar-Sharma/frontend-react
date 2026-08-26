import Home from '../pages/home'
import Deals from '../pages/deals'
import Shop from '../pages/shop'
import Categories from '../pages/categories'
import { RouterProvider, createBrowserRouter } from "react-router";
import MainLayout from '../layout/mainLayout'
import AuthLayout from '../layout/authLayout'
import Login from '../auth/login';
import SignUp from '../auth/signUp'


function appRoute() {
     let router = createBrowserRouter([

        {
            path: "/",
            element: <AuthLayout/>,
            children: [
                {
                    path: "",
                    element: <Login/>
                },
                {
                    path: "/sign-up",
                    element: <SignUp/>
                }

            ]
        },
        {
            path: '/home',
            element: <MainLayout/>,
            children: [
                {
                    path: 'home',
                    element: <Home/>
                },
                {
                    path: 'deals',
                    element: <Deals/>
                },
                {
                    path: 'shop',
                    element: <Shop/>
                },
                {
                    path: 'categories',
                    element: <Categories/>
                },
            ]
        }
     ])
  return (
    <div>
       
       <RouterProvider router={router} />

    </div>
  )
}

export default appRoute