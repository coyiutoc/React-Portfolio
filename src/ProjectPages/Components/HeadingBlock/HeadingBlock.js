import React, {Component} from "react";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import Fade from 'react-reveal/Fade';
import ReactHtmlParser from 'react-html-parser';
import "./HeadingBlock.scss";
import getIcon from "../../../getIcon.js";

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
            {ReactHtmlParser(this.props.data.body)}
          </div>
          <div className="heading-buttons">
              {"icons" in this.props.data ? this.props.data.icons.map(function(obj, index){
                return <Tippy
                        content={obj.text}
                        theme="bootstrap"
                        distance={15}
                        hideOnClick={false}
                        placement="bottom"
                      >
                      <a href = {obj.URL} key={index} target="_blank"><i class={getIcon(obj.iconType)}></i></a>
                    </Tippy>
            }): ""}
          </div>
        </div>
        </Fade>
      </div>
    );
  }
}

export default HeadingBlock;