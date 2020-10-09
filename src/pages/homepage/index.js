import React, {useEffect, useState }from "react";
import Card from '../../component/card/Card'
import Select from '../../component/select/Select'
import "./homepage.css";
import { useIndexedDB } from 'react-indexed-db';


const HomePage = (props) => {
  const [selectedNames, setSelectedNames] = useState([]); 

    const FindFeednames =()=>{
      const unique = [...new Set(props.rssData.map(rssItem => rssItem.feedTitle))];
      return unique;
    }

    const handleFilterChanges = (Title) =>{
      setSelectedNames(Title);
      console.log(Title);
    }

    useEffect(() =>{
      console.log(selectedNames);
    },[selectedNames]);

    const filterRssData = (rssdata) =>{
    }

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
