import './App.css';
import {BrowserRouter as Router,Routes,Route,useRoutes} from 'react-router-dom'
//routings

import PrivateRoute from './routing/PrivateRoute';
import PrivateScreen from './components/PrivateScreen';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
function App() {
   const routes = useRoutes([
     { path: "/", element: <PrivateRoute><PrivateScreen/></PrivateRoute> },
     { path: "login", element: <Login /> },
     { path: "register", element: <Register /> },
     { path: "forgotPassword", element: <ForgotPassword /> },
     { path: "passwordreset/:resetToken", element: <ResetPassword /> },
   ]);
  return routes
}
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

