import React, { Component } from "react";
import "./App.css";
import { Portfolio } from "./Portfolio/Portfolio";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedSection: "",
    };
  }

  render() {
    return (
      <div className="App">
        	<Portfolio />
      </div>
    );
  }
}

export default App;
