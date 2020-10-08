import React, { useState, useEffect } from "react";
import readRSS from '/home/douglashammarstam/CodeDojo2FrontEnd/src/rssreader';

const TEST_URL = "http://www.nasa.gov/rss/dyn/breaking_news.rss"


const HomePage = (props) => {

    props.rssfeed.map((item) => {
        console.log(item)
    })

    return(
        <div className="homepage">
<<<<<<< HEAD
            <ul>
                {props.rssfeed.map((item) => {
                    return(<li>{item}</li>)
                })}
            </ul>
=======
            <h1>* Norska skidskyttar trotsar corona..303
                                        
                                        * Skador stör förtegen Djokovic......304
                                                                                
                                        * Coe vill tillåta knäböjning i OS...305
                                                                                
                                        * Rammad Giro-cyklist utskriven......306
                                                                                
                                        * Skidsporten hotas av Vasa-smäll....307
                                        * NOTISER: Nordenkampen blir av......328
                                                                                
                                          Sport onsdag:                         
                                          Slog 15 år gammalt världsrekord....308
                                          ...världsrekord även på 5000 m.....309</h1>
>>>>>>> master
        </div>
    )
}

export default HomePage;