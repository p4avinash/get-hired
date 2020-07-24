import React, { Component } from "react";
import Cardlist from "./components/developer-cardlist/Cardlist";
import Searchbar from "./components/search-box/Searchbar";
import Scroll from "./components/scroll/Scroll";

import { data } from "./data";

import "./App.css";

import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
        },
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchbox: "",
      data: data,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchbox: event.target.value });
  };

  render() {
    const filteredDevelopers = this.state.data.filter(
      (developer) =>
        developer.name
          .toLowerCase()
          .includes(this.state.searchbox.toLowerCase()) ||
        developer.title.toLowerCase().includes(this.state.searchbox)
    );
    return (
      <div className="tc">
        <Searchbar onSearchChange={this.onSearchChange} />
        <Particles className="particle" params={particlesOptions} />
        <Scroll>
          <Cardlist data={filteredDevelopers} />
        </Scroll>
      </div>
    );
  }
}

export default App;
