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
const { getAll } = useIndexedDB('rssDataStore');


function App() {
  //const TEST_URL = "http://www.nasa.gov/rss/dyn/breaking_news.rss";
  //const TEST_URL2 = "https://feedforall.com/sample.xml"
  //const TEST_URL3 = "http://rss.cnn.com/rss/edition.rss"
  const [rssData, setRssData] = useState([]);
  const [loadDataFromDB, setLoadDataFromDB] = useState([]);
  const { add } = useIndexedDB("rssDataStore");
  const [subscriptionUrls, setSubScriptionUrls] = useState([]);




  useEffect(() => {
    subscriptionUrls.map((item) => {
      return readRSS(item).then((rssData) => setRssData([...rssData, ])).catch(err => console.log(err));
    })
  }, [subscriptionUrls]);

  useEffect(() => {
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
  
        return true
  
      });
    };
    try{
    addIntoDb(rssData);
    } catch(err){
      console.log("Duplicate")
    }
  }, [rssData, add]);

  useEffect(() => {
    console.log(subscriptionUrls);
  }, [subscriptionUrls]);

  useEffect(() => {
    console.log([...rssData])
    console.log(rssData);
  }, [rssData]);

  useEffect(() => {
    console.log("Loading db")
    getAll().then(data => {
      setLoadDataFromDB(data)
      console.log(data)
    })
  }, [rssData])


  const handleSubmitClick = (url) => {
    console.log("submitting url " + url);
    setSubScriptionUrls([...subscriptionUrls, url]);
  };

  return (
    <Router>
      <Route component={DashboardNavBar} />
      <Route exact path="/" component={() => <HomePage rssData={loadDataFromDB} />} />
      <Route
        exact
        path="/submitPage"
        component={() => <SubmitPage cb={handleSubmitClick} />}
      />
    </Router>
  );
}

export default App;