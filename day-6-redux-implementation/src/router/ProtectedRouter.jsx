import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function ProtectedRouter() {
  const { user } = useSelector((store) => store.auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRouter;