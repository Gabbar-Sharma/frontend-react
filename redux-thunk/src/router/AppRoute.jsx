import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Layouts
import AuthLayout from "../app/layout/AuthLayout";
import MainLayout from "../app/layout/MainLayout";

// Auth Pages
import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";

// Routers
import PublicRouter from "../router/PublicRouter";
import ProtectedRouter from "../router/ProtectedRouter";

// Main Pages
import Home from "../shared/home";
import About from "../shared/about";
import Shop from "../shared/shop";
import Deals from "../shared/deals";

// Cart
import Cart from "../features/cart/ui/page/Cart";

// Wishlist
import Wishlist from "../features/wishlist/ui/pages/wishlist";

// Product Details
import ProductDetails from "../features/product/ui/pages/productDetails";

// Auth Action
import { hydrateUser } from "../features/auth/state/auth/authAction";


function AppRoute() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hydrateUser());
  }, [dispatch]);


  const router = createBrowserRouter([
    
    // =========================
    // PUBLIC ROUTES
    // =========================

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


    // =========================
    // PROTECTED ROUTES
    // =========================

    {
      element: <ProtectedRouter />,

      children: [

        {
          path: "main",
          element: <MainLayout />,

          children: [

            // Home
            {
              path: "home",
              element: <Home />,
            },


            // About
            {
              path: "about",
              element: <About />,
            },


            // Shop
            {
              path: "shop",
              element: <Shop />,
            },


            // Product Details
            // Dynamic Route
            {
              path: "shop/:id",
              element: <ProductDetails />,
            },


            // Deals
            {
              path: "deals",
              element: <Deals />,
            },


            // Cart
            {
              path: "cart",
              element: <Cart />,
            },


            // Wishlist
            {
              path: "wishlist",
              element: <Wishlist />,
            },

          ],
        },

      ],
    },

  ]);


  return <RouterProvider router={router} />;
}

export default AppRoute;