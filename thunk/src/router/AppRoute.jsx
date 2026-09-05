import {createBrowserRouter, RouterProvider} from 'react-router'
import AuthLayout from '../app/layout/AuthLayout'
import Login from '../../src/features/auth/ui/pages/Login'
import Register from '../../src/features/auth/ui/pages/Register'
import PublicRouter from '../router/PublicRouter'
import MainLayout from '../../../redux/src/layout/MainLayout'
function AppRoute() {
  
    const router = createBrowserRouter([
        {
        path: '/',
        element: <PublicRouter />,
        children: [
          {
            path: '',
            element: <AuthLayout />,
            children: [
              {
                path: 'login',
                element: <Login />
              },
              {
                path: 'register',
                element: <Register />
              }
            ]
          }
        ]
      },
      //Main Layout
      {
        path: "main",
        element: <MainLayout />

      }
    ])

  return <RouterProvider router={router} />
    
  
}

export default AppRoute