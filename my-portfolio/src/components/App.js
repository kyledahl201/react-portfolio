import React, { Component } from "react";
import { about } from './../constants/About'
import { skills } from './../constants/Skills'
import { Portfolio } from "./Portfolio/Portfolio";
import "./App.css";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedSection: "",
      selectedHeading: "",
      selectedQuote: "",
      about: null,
      skills: null,
    };
  }

  componentDidMount () {
      this.setState({
          selectedSection: "about",
          about, skills,
          selectedHeading: about.heading,
          selectedQuote: about.quote
      })
  }

  handleSectionClick = (sectionName) => {
	  this.setState({
      selectedSection: sectionName,
      selectedHeading: this.state[sectionName].heading,
      selectedQuote: this.state[sectionName].quote
  })
  }

  render() {
    return (
      <div className="App">
			<Portfolio
				about={this.state.about}
				skills={this.state.skills}
				selectedHeading={this.state.selectedHeading}
				selectedSection={this.state.selectedSection}
				selectedQuote={this.state.selectedQuote}
				handleSectionClick={this.handleSectionClick} />
      </div>
    );
  }
}

export default App;
