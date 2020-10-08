import React from "react";
import Card from '../../component/card/Card'

const HomePage = (props) => {
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
