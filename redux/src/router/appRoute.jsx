import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "../layout/MainLayout"


function appRoute() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children:[
                
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default appRoute

