import React, {useEffect, useState }from "react";
import Card from '../../component/card/Card'
import Select from '../../component/select/Select'
import "./homepage.css";


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

        if(selectedNames.length === 0){
            return rssdata;
        }

        let filteredList = rssdata.filter((item) => {
            return selectedNames.includes(item.feedTitle);
        })
        return filteredList;
    }
    

   // const db = useIndexedDB('rssData');
  return (
      
    <div className="homepage">

      <Select className="selector" feedName ={FindFeednames() }  selectedNames = {handleFilterChanges}/>
      <div className="cardlist">
        {filterRssData(props.rssData).map((rssItem) => {
            return <Card key={rssItem.entryTitle}  rssItem={rssItem}/>;
          })}
      </div>
    </div>
  );
};

export default HomePage;
