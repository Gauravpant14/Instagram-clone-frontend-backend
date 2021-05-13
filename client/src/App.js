import "./App.css";
import NavBar from "./components/Navabar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Screens/Home";
import Login from "./components/Screens/Login";
import Signup from "./components/Screens/Signup";
import Profile from "./components/Screens/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
