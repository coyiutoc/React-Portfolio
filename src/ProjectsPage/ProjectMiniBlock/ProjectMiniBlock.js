import React, {Component} from "react";
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';

import "./ProjectMiniBlock.scss";
import "../ProjectBlockSm.scss";

class ProjectMiniBlock extends Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
      <Fade big>
        <MediaQuery minWidth={992}>
          <div className="project-mini-block">
            <div className="project-mini-content">
              <div className="project-mini-title">
                {this.props.title}
              </div>
              <div className="project-mini-taglines">
                <div className="project-mini-subtitle">
                  {this.props.subtitle}
                </div>
              </div>
              <div className="project-mini-divider">
              </div>
              <div className="project-mini-text">
                {this.props.text}
              </div>
              <div className="project-mini-stack">
                {this.props.stack}
              </div>
              <div className="project-mini-icons">
                <div className="project-mini-date">
                  <button className="project-button">READ MORE</button>
                </div>
                {this.props.icons.map(function(obj, index){
                  if (obj.iconType === "INVISION") {
                    return  <a href = {obj.URL}><i class="fab fa-invision"></i></a>
                  }
                  else if (obj.iconType === "WEBSITE") {
                    return <a href = {obj.URL}><i class="fas fa-link"></i></a>
                  }
                  else if (obj.iconType === "GITHUB") {
                    return <a href = {obj.URL}><i class="fab fa-github"></i></a>
                  }
                  else if (obj.iconType === "IMAGE") {
                    return <a href = {obj.URL} target="_blank"><i class="fas fa-file-image"></i></a>
                  }
                })}
              </div>
            </div>
            <img src = {this.props.img}></img>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <div className="project-block-sm">
            <div className="project-img-sm">
              <div className="project-img-overlay">
                <div className="project-text-sm">
                  <div className="project-title-sm">
                    {this.props.title}
                  </div>
                  <div className="project-subtitle-sm">
                    {this.props.subtitle}
                  </div>
                  <div className="project-divider-sm"></div>
                  <div className="project-body-sm">
                    {this.props.text}
                  </div>
                  <div className="project-stack-sm">
                    {this.props.stack}
                  </div>
                  <div className="project-mini-icons">
                    <button className="project-button">
                      READ MORE
                    </button>
                    <div className="buffer"></div>
                    {this.props.icons.map(function(obj, index){
                        if (obj.iconType === "INVISION") {
                          return  <a href = {obj.URL}><i class="fab fa-invision"></i></a>
                        }
                        else if (obj.iconType === "WEBSITE") {
                          return <a href = {obj.URL}><i class="fas fa-link"></i></a>
                        }
                        else if (obj.iconType === "GITHUB") {
                          return <a href = {obj.URL}><i class="fab fa-github"></i></a>
                        }
                        else if (obj.iconType === "IMAGE") {
                          return <a href = {obj.URL} target="_blank"><i class="fas fa-file-image"></i></a>
                        }
                    })}
                    </div>
                  </div>
              </div>
              <img src={this.props.img}></img>
            </div>
          </div>
        </MediaQuery>
      </Fade>
    );
  }
}

export default ProjectMiniBlock;