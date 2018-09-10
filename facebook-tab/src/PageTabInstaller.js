import React, { Component } from 'react';
import config from './config';

class PageTabInstaller extends Component {
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
            // claim profile first
            let pageTabPaylod = {
                "app_id": config.app_id,
                "custom_name": config.tab_name,
                "is_non_connection_landing_tab": false,
                "position": 1
            }

            // Then register page
            // POST to graph/{page-id}/tabs with payload
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

  export default PageTabInstaller;