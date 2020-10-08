import SubmitPage from "./pages/submitpage";
import HomePage from "./pages/homepage";
import DashboardNavBar from "./component/dashboardNavBar/DashboardNavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { readRSS } from "./rssreader";

function App() {
  const TEST_URL = "http://www.nasa.gov/rss/dyn/breaking_news.rss";
  const [rssData, setRssData] = useState([]);

  useEffect(() => {
    setRssData(readRSS(TEST_URL));
  }, []);

  return (
    <Router>
      <Route component={DashboardNavBar} />
      <Route exact path="/" component={() => <HomePage rssData={rssData} />} />
      <Route exact path="/SubmitPage" component={SubmitPage} />
    </Router>
  );
}

export default App;
