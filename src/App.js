import "./App.css";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Register from "./register/Register";
import Login from "./login/Login";
import Admin from "./admin/Admin";
import User from "./user/User";
import Deposit from "./deposit/Deposit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/user" component={User} />
          <Route path="/deposit" component={Deposit}/>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
        <ScrollToTop smooth color="grey" />
      </div>
    </Router>
  );
}

export default App;
