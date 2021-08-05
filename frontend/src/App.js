import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Add from './components/Add';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={Add} />
          <Route path="/users" component={Users} exact />
          <Route path="/users/:id" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
