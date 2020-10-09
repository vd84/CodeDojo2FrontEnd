import React, { useState, useEffect } from "react";
import "./submitpage.css";
import { Button, Typography} from '@material-ui/core';
const SubmitPage = (props) => {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    console.log(currentUrl);
  }, [currentUrl]);

  const inputChangeHandler  = (event) =>{
      setCurrentUrl(event.target.value)
  }

  return (
    <div className="submitpage">
      <Typography variant="h3" component="h3">Add URL To Subscribe To</Typography>
      <label>URL:</label>
      <input onChange={inputChangeHandler}></input>
      <Button variant="outlined" color="primary" onClick={() => props.cb(currentUrl)}>
        Add Url To Subscription
      </Button>

      <label></label>
    </div>
  );
};

export default SubmitPage;
