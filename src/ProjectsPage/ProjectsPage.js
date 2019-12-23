import React, {Component} from "react";
import ProjectBlock from "./ProjectBlock/ProjectBlock.js";
import ProjectMiniBlock from "./ProjectMiniBlock/ProjectMiniBlock.js";

import Fade from 'react-reveal/Fade';
import "./ProjectsPage.scss";
import PROJECT_DATA from "../data.js";

class ProjectsPage extends Component {

  render () {
    return (
      <div id="ProjectsPage">
        <div className = "projects-header-container">
          <div className = "projects-header">
            <Fade top >
            SELECTED PROJECTS
            </Fade>
          </div>
        </div>
        {PROJECT_DATA.map(function(obj, index){
            return  <ProjectBlock 
                     key = {index}
                     title = {obj.title}
                     img = {obj.img}
                     subtitle = {obj.subtitle}
                     text = {obj.text}
                     stack = {obj.stack}/>
        })}
        <div id ="otherBlock" className = "projects-header-container">
          <div className = "projects-header">
            <Fade top >
              OTHER NOTEWORTHY PROJECTS
            </Fade>
          </div>
        </div>
        <div className = "mini-projects-container">
          <ProjectMiniBlock />
          <ProjectMiniBlock />
          <ProjectMiniBlock />
          <ProjectMiniBlock />
          <ProjectMiniBlock />
          <ProjectMiniBlock />
        </div>
    </div>
    );
  }
}

export default ProjectsPage;