import React, {Component} from "react";
import MediaQuery from 'react-responsive';
import "./Navigation.scss";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import resume from "../assets/files/Caitlin-Coyiuto-Resume.pdf";

class Navigation extends Component {

  render () {
    return (
      <div>
      <MediaQuery minWidth={767}>
      <div id = "Navigation">
        <div id="name-link">
          <HashLink to="/#LandingPage">
            &#123; CAITLIN COYIUTO &#125;
          </HashLink>
        </div>
        <div id="links">
          <HashLink to="/#ProjectsPage">PROJECTS</HashLink>
          <Link to= "/About">ABOUT</Link>
          <a href = {resume} target= "_blank" >RESUME</a>
        </div>
      </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div id = "Navigation">
          <div id="links">
            <Link to="/#ProjectsPage">PROJECTS</Link>
            <Link to = "/About">ABOUT</Link>
            <a href = {resume} target= "_blank" >RESUME</a>
          </div>
      </div>
      </MediaQuery>
      </div>
    );
  }
}

export default Navigation;