import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/authLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Home from "../shared/Home";
import Shop from "../shared/Shop";
import Products from "../shared/Products";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { useEffect } from "react";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { Navigate } from "react-router";

function AppRoute() {
  let dispatch = useDispatch();

  const hydrateUser = () => {
    const loggedUser = JSON.parse(localStorage.getItem("userLoggedIn"));

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
      element: <PublicRoute />,
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
              path: "/login",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <ProtectedRoute />,
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "shop",
              element: <Shop />,
            },
            {
              path: "products",
              element: <Products />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRoute;
