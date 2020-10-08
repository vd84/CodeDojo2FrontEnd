
import SubmitPage from './pages/submitpage';
import HomePage from './pages/homepage';
import DashboardNavBar from './component/DashboardNavBar'
import React, { useState, useEffect } from "react";
import LoginPage from "./pages/loginpage";
import readRSS from "./rssreader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
let Parser = require("rss-parser");
let parser = new Parser({});

const TEST_URL = "http://www.nasa.gov/rss/dyn/breaking_news.rss";


function App() {
  const [rssFeedUrls, setRssFeedUrls] = useState([]);
  const [rssFeedData, setRssFeedData] = useState([]);

  useEffect(() => {
    setRssFeedData(readRSS(TEST_URL));
    console.log(rssFeedData)
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
