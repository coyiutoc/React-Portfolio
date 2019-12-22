import React, {Component} from "react";
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';

import "./ProjectBlock.scss";

class ProjectBlock extends Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
      <Fade big>
        <MediaQuery minWidth={767}>
          <div className="project-block">
            <div className="project-info">
              <div className="project-title">{this.props.title}</div>
              <div className="project-subtitle">{this.props.subtitle}</div>
              <div className="project-text project-text-bg">
                {this.props.text}
              </div>
              <div className="project-stack">
                {this.props.stack}
              </div>
              <button className="project-button">READ MORE</button>
            </div>
            <div className = "img-container">
              <img src = {this.props.img}>
              </img>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
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
                  <button className="project-button-sm">
                    READ MORE
                  </button>
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

export default ProjectBlock;