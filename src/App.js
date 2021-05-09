import Login from "./containers/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Signup from "./containers/Signup";
import ForgetPassword from "./containers/ForgetPassword";
import ResetPassword from "./containers/ResetPassword";
import { AuthProvider } from "./contexts/AuthContexts";
const dotenv = require('dotenv').config();

function App() {
  return (
    <AuthProvider>
   <div>
    <Router>
     <Route exact path="/login" component={Login} />
     <Route exact path="/signup" component={Signup} />
     <Route exact path="/forgetpassword" component={ForgetPassword} />
     <Route exact path="/resetpassword" component={ResetPassword} />
     </Router>
   </div>
   </AuthProvider>
  );
}

export default App;
