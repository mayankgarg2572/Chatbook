import Dashboard from './Dashboard/Dashboard';
import Navbar from './Navbar/Navbar';
import Form1 from './Signin/Signin';
import Form from './Signup/Signup';
import './Manage.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function Manage() {
  return (
    <Router>
      <div className="Manage">
        <Navbar />
        <Switch>
          <Route path="/Dashboard/Dashboard" exact component={Dashboard} />
          <Route path="/Signin/Signin" component={Form1} />
          <Route path="/Signup/Signup" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}
export default Manage;