import React, { Component } from 'react';
import config from './config'
class KycProfileViewer extends Component {
    render() {
      return (
        <div>
          <h2>{config.tab_name}</h2>
        </div>
      );
    }
  };

  export default KycProfileViewer;