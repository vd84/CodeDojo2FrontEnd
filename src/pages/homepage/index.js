import React, {useEffect, useState }from "react";
import Card from '../../component/card/Card'
import Select from '../../component/select/Select'
import "./homepage.css";


const HomePage = (props) => {
<<<<<<< HEAD
    console.log(props.rssData)
=======
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
    

>>>>>>> 5d5a14df24ce687a4d79502a82eaef40ab4212a8
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
