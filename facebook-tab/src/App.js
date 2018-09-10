import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

class Home extends Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : 'your-app-id',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.1'
      });
    }.bind(this);
      
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
};

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;
