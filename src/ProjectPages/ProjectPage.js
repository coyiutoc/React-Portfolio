import React, {Component} from "react";
import { useParams } from "react-router";
import HeadingBlock from "./Components/HeadingBlock/HeadingBlock.js";
import Section from "./Components/Section/Section.js";
import Conclusion from "./Components/Conclusion/Conclusion.js";
import "./ProjectPage.scss";

import data from "../data/projectData.js";

const ProjectPage = () => {

  let {projectID} = useParams();
  let projectData = data[projectID];

  return (
    <div className="project-page">
      <HeadingBlock data={projectData.header}/>
      {"sections" in projectData ? projectData.sections.map(function(section, index){
          return  <Section 
                    key = {index}
                    data = {section}/>
      }): ""}
      {"conclusion" in projectData? <Conclusion conclusion={projectData.conclusion}/> : ""}
    </div>
  );
}

export default ProjectPage;