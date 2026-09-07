import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Categories from "../pages/categories";
import Shop from "../pages/shop";
import Deals from "../pages/deals";
import MainLayout from "../layout/MainLayout";

function appRoute() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "deals",
          element: <Deals />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
      ],
    },
  ]);
  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  );
}

export default appRoute;
