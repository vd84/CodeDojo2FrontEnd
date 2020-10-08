import SubmitPage from "./pages/submitpage";
import HomePage from "./pages/homepage";
import DashboardNavBar from "./component/dashboardNavBar/DashboardNavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { readRSS } from "./rssreader";
import { DBConfig } from "./DBConfig";
import { initDB } from "react-indexed-db";
import { useIndexedDB } from "react-indexed-db";

initDB(DBConfig);



function App() {
  const TEST_URL = "http://www.nasa.gov/rss/dyn/breaking_news.rss";
  const [rssData, setRssData] = useState([]);
  const { add } = useIndexedDB("rssDataStore");

  const addIntoDb = (rssList) => {


/*     add({
      feedTitle: rssItem.feedTitle,
      entryTitle: rssItem.entryTitle,
      content: rssItem.content,
      pubDate: rssItem.pubDate,
      link: rssItem.link,
      contentSnippet: rssItem.contentSnippet,
    }).then(
      (event) => {
        console.log("ID GENERATED", event.target.result);
      },
      (error) => {
        console.log(error);
      }
    ); */


    rssList.map((rssItem) => {
      console.log(rssItem);
      add({
        feedTitle: "1",
        entryTitle: rssItem.entryTitle,
        content: rssItem.content,
        pubDate: rssItem.pubDate,
        link: rssItem.link,
        contentSnippet: rssItem.contentSnippet,
      }
      );
    });
  };
  let newState = [];

  useEffect(() => {
    let data  = readRSS(TEST_URL)

    console.log(data.keys.name)
    let arr = []
    data.forEach(([key, value]) => {
      arr.push(value); // 1
    });

    console.log(arr)

    for (let i = 0; i<data.length; i++){
      console.log(data[i])
      newState.push(data[i])
    }

    console.log(newState);


  }, []);

  useEffect(() => {
    addIntoDb(rssData)
  }, [rssData]);



  return (
    <Router>
      <Route component={DashboardNavBar} />
      <Route exact path="/" component={() => <HomePage rssData={rssData} />} />
      <Route exact path="/SubmitPage" component={SubmitPage} />
    </Router>
  );
}

export default App;
