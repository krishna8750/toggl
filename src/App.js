import Login from "./containers/Login"
import Signup from "./containers/Signup"
import ForgetPassword from "./containers/ForgetPassword"
import ResetPassword from "./containers/ResetPassword"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


function App() {
  return (
   <div>
     <Router>
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/forgetpassword" component={ForgetPassword} exact />
        <Route path="/resetpassword" component={ResetPassword} exact />
     </Router>
   </div>
  );
}

export default App;
