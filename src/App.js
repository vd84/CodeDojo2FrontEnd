import React, { useState, useEffect } from "react";
import LoginPage from "./pages/loginpage";
import SubmitPage from "./pages/submitpage";
import HomePage from "./pages/homepage";
import readRSS from "./rssreader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
let Parser = require('rss-parser');
let parser = new Parser({
});

const TEST_URL = "http://www.nasa.gov/rss/dyn/breaking_news.rss"

function App() {
  useEffect(() => {
    readRSS(TEST_URL);
  });

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/submit">Submit</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/submit">
            <SubmitPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
