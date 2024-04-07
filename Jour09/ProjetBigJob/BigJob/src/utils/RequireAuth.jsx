import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ protect, children }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");
  const isAuthenticated = token && userRole;
  let location = useLocation();

  if (!isAuthenticated) {
    console.log("vous n'etes pas connecter");
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (protect === userRole) {
    return children;
  } else {
    return <Navigate to="/Error" replace />;
  }
};
