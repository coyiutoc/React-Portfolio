import React, {Component} from "react";
import MediaQuery from 'react-responsive';
import "./Navigation.scss";
import { HashLink as Link } from 'react-router-hash-link';
import resume from "../assets/files/Caitlin-Coyiuto-Resume.pdf";

class Navigation extends Component {

  render () {
    return (
      <div>
      <MediaQuery minWidth={767}>
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
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div id = "Navigation">
          <div id="links">
            <Link to="/#ProjectsPage">PROJECTS</Link>
            <a href = "/About">ABOUT</a>
            <a href = {resume} target= "_blank" >RESUME</a>
          </div>
      </div>
      </MediaQuery>
      </div>
    );
  }
}

export default Navigation;