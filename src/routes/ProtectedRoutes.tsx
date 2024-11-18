import { Navigate } from "react-router-dom";

function ProtectedRoutes({element}: {element: JSX.Element}) {
  const token = localStorage.getItem('token');

  return token ? element : <Navigate to="/" replace />;
}

export default ProtectedRoutes