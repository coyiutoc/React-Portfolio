import React, {Component} from "react";
import Fade from 'react-reveal/Fade';
import ReactHtmlParser from 'react-html-parser';
import "./Section.scss";

class Section extends Component {

  render () {

    let imgLength = 0;
    if (this.props.data.img != null) {
      imgLength = this.props.data.img.length;
    }
    
    return (
      <div className="section">
        <Fade>
        <div className="columns">
          <div className="left-column">
            <div className="section-timeline">
              {this.props.data.timeline}
            </div>
            <div className="section-title">
              {this.props.data.title}
            </div>
            <div className="section-tagline">
              {this.props.data.tagline}
            </div>
          </div>
          <div className="right-column">
            {this.props.data.body.map(function(text, index){
              return  <div key={index}>{ReactHtmlParser(text)}</div>
            })}
          </div>
        </div>
        <div className="section-images">
          {this.props.data.img ? this.props.data.img.map(function(img, index){
            return  <img className = {imgLength == 1 || index == (imgLength - 1)? "img-sm": ""} src = {img} onClick={()=> window.open(img, "_blank")}></img>
          }): ""}
        </div>
        </Fade>
      </div>
    );
  }
}

export default Section;