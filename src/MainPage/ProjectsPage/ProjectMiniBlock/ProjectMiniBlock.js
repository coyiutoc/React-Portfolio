import React, {Component} from "react";
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';
import getIcon from "../../../getIcon.js";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import "./ProjectMiniBlock.scss";
import "../ProjectBlockSm.scss";

class ProjectMiniBlock extends Component {

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
                  {this.props.readMore === true ? 
                    (<button className="project-button">
                            READ MORE
                    </button>) : ""
                  }
                </div>
                {"icons" in this.props ? this.props.icons.map(function(obj, index){
                  return <Tippy
                          content={obj.text}
                          theme="bootstrap"
                          distance={15}
                          hideOnClick={false}
                          placement="top"
                        >
                        <a href = {obj.URL} key={index} target="_blank"><i class={getIcon(obj.iconType)}></i></a>
                      </Tippy>
                }): ""}                 
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
                    {this.props.readMore === true ? 
                      (<button className="project-button">
                              READ MORE
                      </button>) : ""
                    }
                    <div className="buffer"></div>
                    {"icons" in this.props ? this.props.icons.map(function(obj, index){
                      return <Tippy
                              content={obj.text}
                              theme="bootstrap"
                              distance={15}
                              hideOnClick={false}
                              placement="top"
                            >
                            <a href = {obj.URL} key={index} target="_blank"><i class={getIcon(obj.iconType)}></i></a>
                          </Tippy>
                    }): ""}  
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