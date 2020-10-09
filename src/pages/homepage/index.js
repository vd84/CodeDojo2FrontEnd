import React from "react";
import Card from '../../component/card/Card'
import "./homepage.css";
import { useIndexedDB } from 'react-indexed-db';


const HomePage = (props) => {
    console.log(props.rssData)
   // const db = useIndexedDB('rssData');
  return (
      
    <div className="homepage">
      <ul>
        {props.rssData.map((rssItem) => {
          return <Card key={rssItem.entryTitle}  rssItem={rssItem}/>;
        })}
      </ul>
    </div>
  );
};

export default HomePage;
