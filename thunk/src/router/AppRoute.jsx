import {createBrowserRouter, RouterProvider} from 'react-router'
function AppRoute() {
  
    const router = createBrowserRouter([
        {
            path: '/'
            
        }
    ])

  return <RouterProvider router={router} />
    
  
}

export default AppRoute