import SubmitPage from "./pages/submitpage";
import HomePage from "./pages/homepage";
import DashboardNavBar from "./component/dashboardNavBar/DashboardNavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { readRSS } from "./rssreader";
import { DBConfig } from "./DBConfig";
import { initDB } from "react-indexed-db";
import { useIndexedDB } from "react-indexed-db";
initDB(DBConfig);

function App() {
  const TEST_URLS = "http://www.nasa.gov/rss/dyn/breaking_news.rss";
  const [rssData, setRssData] = useState([]);
  const { add } = useIndexedDB("rssDataStore");
  const [subscriptionUrls, setSubScriptionUrls] = useState([]);

  useEffect(() => {
    let listOfRssLists = readRSS(TEST_URLS);
    console.log(listOfRssLists)
    setRssData(readRSS(TEST_URLS));
  }, []);

  useEffect(() => {
    add({
      feedTitle: 1,
      entryTitle: 2,
      content: 3,
      pubDate: 4,
      link: 5,
      contentSnippet: 6,
    });
  }, [rssData]);

  useEffect(() => {
    console.log(subscriptionUrls)
  }, [subscriptionUrls] )

  const handleSubmitClick = (url) => {
    console.log("submitting url " + url)
    setSubScriptionUrls([...subscriptionUrls, url])
  }

  return (
    <Router>
      <Route component={DashboardNavBar} />
      <Route exact path="/" component={() => <HomePage rssData={rssData} />} />
      <Route exact path="/submitPage" component={() => <SubmitPage cb={handleSubmitClick}/>} />
    </Router>
  );
}

export default App;
