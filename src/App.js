import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Header from "./header/Header";
import Footer from "./footer/Footer";


function App() {
  return <Router>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
     
      <Footer/>
    </div>
  </Router>;
}

export default App;
