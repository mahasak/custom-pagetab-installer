import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from './config';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Verify} />
      <Route path="/install" component={Install} />
    </div>
  </Router>
);

class Install extends Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : config.app_id,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.1'
      });

      window.FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          window.FB.ui({
            method: 'pagetab',
            display: 'iframe',
            redirect: config.redirect_uri
          }, function(response){
            console.log(response);
          });
        } else {
          document.getElementById('status').innerHTML = 'Please log ' +
            'into to faebook.';
        }
      });
    };
      
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  };
  
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
};

const Verify = () => (
  <div>
    <h2>Verify</h2>
  </div>
);

export default App;
