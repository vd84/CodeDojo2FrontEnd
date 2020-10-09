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
  const TEST_URL = "http://www.nasa.gov/rss/dyn/breaking_news.rss";
  const [rssData, setRssData] = useState([]);
  const { add } = useIndexedDB("rssDataStore");
  const [subscriptionUrls, setSubScriptionUrls] = useState([]);

  const addIntoDb = (rssList) => {
    rssList.map((rssItem) => {

      try {
        add({
          feedTitle: rssItem.feedTitle,
          entryTitle: rssItem.entryTitle,
          content: rssItem.content,
          pubDate: rssItem.pubDate,
          link: rssItem.link,
          contentSnippet: rssItem.contentSnippet,
        });
      } catch (e){
        console.log("SAme objewct")
      }

    });
  };

  useEffect(() => {
    readRSS(TEST_URL).then((rssData) => setRssData(rssData)).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    try{
    addIntoDb(rssData);
    } catch(err){
      console.log("Duplicate")
    }
  }, [rssData]);

  useEffect(() => {
    console.log(subscriptionUrls);
  }, [subscriptionUrls]);

  const handleSubmitClick = (url) => {
    console.log("submitting url " + url);
    setSubScriptionUrls([...subscriptionUrls, url]);
  };

  return (
    <Router>
      <Route component={DashboardNavBar} />
      <Route exact path="/" component={() => <HomePage rssData={rssData} />} />
      <Route
        exact
        path="/submitPage"
        component={() => <SubmitPage cb={handleSubmitClick} />}
      />
    </Router>
  );
}

export default App;