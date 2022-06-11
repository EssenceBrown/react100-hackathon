import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      fact: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    axios
      .get("https:catfact.ninja/fact")
      .then((response) => response.data.fact)
      .then((fact) => this.setState({ fact }));
  }

  handleClick() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => response.data.slip.advice)
      .then((quote) => this.setState({ quote }));
  }

  render() {
    return (
      <div className="App">
        <div className="btn">
          <div>
            <div className="container">
              <div className="page-header border-bottom border-light">
                <div className="button-containe">
                  <button href="#" type="button" onClick={this.handleClick}>
                    Advice
                  </button>
                  <p>{this.state.quote}</p>
                  <br></br>
                  <button href="#" type="button" onClick={this.handleSubmit}>
                    Random catfact
                  </button>
                  <div className="container">{this.state.fact}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
