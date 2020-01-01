import React, {Component} from "react";
import "./Navigation.scss";
import { HashLink as Link } from 'react-router-hash-link';
import resume from "../assets/files/Caitlin-Coyiuto-Resume.pdf";

class Navigation extends Component {

  render () {
    return (
      <div id = "Navigation">
        <div id="name-link">
          <Link to="/#LandingPage">
            &#123; CAITLIN COYIUTO &#125;
          </Link>
        </div>
        <div id="links">
          <Link to="/#ProjectsPage">PROJECTS</Link>
          <a href = "/About">ABOUT</a>
          <a href = {resume} target= "_blank" >RESUME</a>
        </div>
      </div>
    );
  }
}

export default Navigation;