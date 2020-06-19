import React, { Component } from "react";
import Question from "../question";
import "./dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="questions-list">
          <Question /> <Question /> <Question />
        </div>
        <div className="questions-list">
          <Question /> <Question /> <Question />
        </div>
      </div>
    );
  }
}

export default Dashboard;
