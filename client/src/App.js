import "./App.css";
import React, { useEffect } from "react";
import NavBar from "./components/Navabar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./components/Screens/Home";
import Login from "./components/Screens/Login";
import Signup from "./components/Screens/Signup";
import Profile from "./components/Screens/Profile";
import CreatePost from "./components/Screens/CreatePost";
import { ToastContainer } from "react-toastify";

const Routing = () => {
  const history = useHistory();
  useEffect(() => {
    const user = localStorage.getItem("token");
    if (!user) {
      history.push("/login");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/createpost" component={CreatePost} />
    </Switch>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routing />
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
