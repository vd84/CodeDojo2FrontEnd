import React from "react";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <ul>
        {props.rssData.map((rssItem) => {
          return <li key={rssItem.entryTitle}>{rssItem.entryTitle}</li>;
        })}
      </ul>
    </div>
  );
};

export default HomePage;
