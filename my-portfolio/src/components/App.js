import React, { Component } from "react";
import "./App.css";

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
        	<p>
				Hello World
			</p>
      </div>
    );
  }
}

export default App;
