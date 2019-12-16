import React, { Component } from "react";
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Home from './components/pages/Home/Home';
import WishList from './components/pages/WishList';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/wishlists' component={WishList} /> 
      </Router>
      </div>
    );
  }
}

export default App;
