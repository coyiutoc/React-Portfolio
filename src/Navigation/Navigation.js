import React, {Component} from "react";
import "./Navigation.scss";

class Navigation extends Component {

  render () {
    return (
      <div id="Navigation">
        <a href = "">top</a>
        <div className = "vertical"></div>
        <a href = "">projects</a>
        <div className = "vertical"></div>
        <a href = "">about</a>
        <div className = "vertical"></div>
        <a href = "">resume</a>
      </div>
    );
  }
}

export default Navigation;