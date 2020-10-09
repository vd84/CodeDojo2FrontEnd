import React from "react";
import "./submitpage.css";
import { useState, useEffect } from "react";

const SubmitPage = (props) => {
  const [currentUrl, setCurrentUrl] = useState("");

  const inputChangeHandler = (e) => {

    setCurrentUrl(e.target.value);

  }

  useEffect(() => {
      console.log(currentUrl)
  }, [currentUrl])

  return (
    <div className="submitpage">
      <h1>Add Url to subscribe to</h1>
      <label>URL:</label>
      <input onChange={inputChangeHandler}></input>
      <button onClick={() =>props.cb(currentUrl)} >Add Url To Subscription</button>

      <label></label>
    </div>
  );
};

export default SubmitPage;
