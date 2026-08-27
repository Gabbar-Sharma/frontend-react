import Home from '../pages/home'
import Deals from '../pages/deals'
import Shop from '../pages/shop'
import Categories from '../pages/categories'
import { RouterProvider, createBrowserRouter } from "react-router";
import MainLayout from '../layout/mainLayout'

import Login from '../auth/login';
import SignUp from '../auth/signUp'
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';


function appRoute() {
     let router = createBrowserRouter([

        {
            path: "/",
            element: <PublicRoute/>,
            children: [
                {
                    path: "/login",
                    element: <Login/>
                },
                {
                    path: "/sign-up",
                    element: <SignUp/>
                }

            ]
        },
        {
            path: "/home",
            element: <ProtectedRoute />,
            children:[
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
            ]
        },
       
     ])
  return (
    <div>
       
       <RouterProvider router={router} />

    </div>
  )
}

export default appRoute