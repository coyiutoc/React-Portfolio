import React, {Component} from "react";
import Fade from 'react-reveal/Fade';
import "./HeadingBlock.scss";

class HeadingBlock extends Component {

  render () {

    return (
      <div className="heading-block">
        <Fade>
        <img src = {this.props.data.img}></img>
        <div className="heading-content">
          <div className="heading-title">
            {this.props.data.title}
          </div>
          <div className="heading-block-divider">
          </div>
          <div className="heading-columns">
            <div className="column-section">
              <div>ROLE</div>
              <div>
                {this.props.data.role.map(function(role, index){
                  return  <div key={index}>{role}</div>
                })}
              </div>
            </div>
            <div className="column-section">
              <div>TEAM</div>
              <div>
                {this.props.data.team.map(function(person, index){
                  return  <div key={index}>{person}</div>
                })}
              </div>
            </div>
            <div className="column-section">
              <div>TOOLS</div>
              <div>
                {this.props.data.stack.map(function(tool, index){
                  return  <div key={index}>{tool}</div>
                })}
              </div>
            </div>
            <div className="column-section">
              <div>TIMELINE</div>
              <div>{this.props.data.timeline}</div>
            </div>
          </div>
          <div className="heading-body">
            {this.props.data.body}
          </div>
        </div>
        </Fade>
      </div>
    );
  }
}

export default HeadingBlock;