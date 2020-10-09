import React, {useEffect, useState }from "react";
import Card from '../../component/card/Card'
import Select from '../../component/select/Select'
import "./homepage.css";


const HomePage = (props) => {
    console.log(props.rssData)
   // const db = useIndexedDB('rssData');
  return (
      
    <div className="homepage">
      <Select feedName ={FindFeednames() }  selectedNames = {handleFilterChanges}/>
      <div className="cardlist">
        {props.rssData.map((rssItem) => {
            return <Card key={rssItem.entryTitle}  rssItem={rssItem}/>;
          })}
      </div>
    </div>
  );
};

export default HomePage;
