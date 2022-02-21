import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  if (!!localStorage.getItem("authToken")) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};

export default PrivateRoute;
