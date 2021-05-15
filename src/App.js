import Login from "./containers/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Signup from "./containers/Signup";
import ForgetPassword from "./containers/ForgetPassword";
import ResetPassword from "./containers/ResetPassword";
import { AuthProvider } from "./contexts/AuthContexts";
import Dashboard from "./containers/dashboard/Dashboard";
import UpdateProfile from "./containers/UpdateProfile";
import PrivateRoute from './containers/PrivateRoute'

const dotenv = require('dotenv').config();

function App() {
  return (
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/updateprofile" component={UpdateProfile} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
            </Switch>
            <Route exact path="/forgetpassword" component={ForgetPassword} />
            <Route exact path="/resetpassword" component={ResetPassword} />
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
