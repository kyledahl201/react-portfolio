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

  handleSectionClick = (sectionName) => {
	  alert(sectionName)
  }

  render() {
    return (
      <div className="App">
			<Portfolio
				hello="Hello I need a job"
				handleSectionClick={this.handleSectionClick} />
      </div>
    );
  }
}

export default App;
