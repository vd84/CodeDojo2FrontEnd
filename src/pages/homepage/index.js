import React, { useState, useEffect } from "react";
import readRSS from '/home/douglashammarstam/CodeDojo2FrontEnd/src/rssreader';

const TEST_URL = "http://www.nasa.gov/rss/dyn/breaking_news.rss"


const HomePage = (props) => {

    props.rssfeed.map((item) => {
        console.log(item)
    })

    return(
        <div className="homepage">
            <ul>
                {props.rssfeed.map((item) => {
                    return(<li>{item}</li>)
                })}
            </ul>
        </div>
    )
}

export default HomePage;