
import SubmitPage from './pages/submitpage';
import HomePage from './pages/homepage';
import DashboardNavBar from './component/DashboardNavBar'
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {

  return (
    <Router>
      <Route component={DashboardNavBar} />
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/SubmitPage" component={SubmitPage}/>
    </Router>
  );
}

export default App;
