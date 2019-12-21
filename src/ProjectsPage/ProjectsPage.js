import React, {Component} from "react";
import ProjectBlock from "./ProjectBlock/ProjectBlock.js";
import Fade from 'react-reveal/Fade';
import "./ProjectsPage.scss";

import asyncVRImg from "../assets/imgs/async-vr.png";

class ProjectsPage extends Component {

  render () {
    return (
      <div id="ProjectsPage">
        <div className = "projects-header-container">
          <div className = "projects-header">
            <Fade top>
            PROJECTS
            </Fade>
          </div>
        </div>
        <ProjectBlock 
           img = {asyncVRImg}
           title = "Async VR"
           subtitle = "UX RESEARCH & DEVELOPMENT"
           text = "Academic research on asynchronous VR collaboration at UBC's Multimodal User Experience Lab. 
           Involved ideation of new features, implementation, and 
           usability testing. "
           stack = "HTC VIVE | UNITY | C# | USABILITY TESTING"/>
      </div>
    );
  }
}

export default ProjectsPage;