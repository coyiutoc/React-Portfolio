import React, {Component} from "react";
// import "./Navigation.scss";
import "./Navigation2.scss";

class Navigation extends Component {

  render () {
    return (
      // <div id="Navigatsion">
      //   <a href = "">top</a>
      //   <div className = "vertical"></div>
      //   <a href = "">projects</a>
      //   <div className = "vertical"></div>
      //   <a href = "">about</a>
      //   <div className = "vertical"></div>
      //   <a href = "">resume</a>
      //   <div className = "vertical"></div>
      // </div>
      <div id = "Navigation">
        <div id="name-link">
          <a href = "#LandingPage"> &#123; CAITLIN COYIUTO &#125;</a>
        </div>
        <div id="links">
          <a href = "#ProjectsPage">PROJECTS</a>
          <a href = "">ABOUT</a>
          <a href = "">RESUME</a>
        </div>
      </div>
    );
  }
}

export default Navigation;