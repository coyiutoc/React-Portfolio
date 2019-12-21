import React, {Component} from "react";
import "./ProjectBlock.scss";

class ProjectBlock extends Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
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
    );
  }
}

export default ProjectBlock;