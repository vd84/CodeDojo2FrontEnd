import React, { useState } from "react";
import "./submitpage.css";
const SubmitPage = () => {

    const [currentUrl, setCurrentUrl] =  useState("");
  useEffect(() => {
    console.log(currentUrl);
  }, [currentUrl]);

  return (
    <div className="submitpage">
      <h1>Add Url to subscribe to</h1>
      <label>URL:</label>
      <input onChange={inputChangeHandler}></input>
      <button onClick={() => props.cb(currentUrl)}>
        Add Url To Subscription
      </button>

      <label></label>
    </div>
  );
};

export default SubmitPage;
