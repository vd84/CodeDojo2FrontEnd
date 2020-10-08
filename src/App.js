
import React from 'react';
import SubmitPage from './pages/submitpage';
import HomePage from './pages/homepage';
import DashboardNavBar from './component/DashboardNavBar'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import LoginPage from "./pages/loginpage";
import SubmitPage from "./pages/submitpage";
import HomePage from "./pages/homepage";
import readRSS from "./rssreader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
let Parser = require('rss-parser');
let parser = new Parser({
});

const TEST_URL = "http://www.nasa.gov/rss/dyn/breaking_news.rss"


function App() {
  useEffect(() => {
    readRSS(TEST_URL);
  });

  return (
    <Router>
      <Route component={DashboardNavBar} />
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/SubmitPage" component={SubmitPage}/>
    </Router>
  );
}

export default App;
