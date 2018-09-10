import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageTabInstaller from './PageTabInstaller'
import KycProfileViewer from './KycProfileViewer'
import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={KycProfileViewer} />
      <Route path="/install" component={PageTabInstaller} />
    </div>
  </Router>
);

export default App;
