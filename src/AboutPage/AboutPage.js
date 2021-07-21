import React, {Component} from "react";
import Fade from 'react-reveal/Fade';
import "./AboutPage.scss";
import aboutmeimg from "../assets/imgs/aboutme.JPG";

class AboutPage extends Component {

  render () {    
    return (
      <div id="AboutPage">
        <Fade>
        <div className = "about-container">
            <img src={aboutmeimg}/>
            <div className = "about-body">
                <div className = "about-header">
                    Hi there.
                </div>
                <div className = "about-text">
                I consider myself a strange mix between a researcher and developer - I love digging deep into 
                human behavior, prototyping meaningful experiences, and actually developing a finished 
                product for people to interact with.
                <p>Currently, I work as a <b>Front-End Developer</b> at <b>Amazon Web Services</b> on the Amazon Connect team.</p>
                <p>Prior to that, I completed my <b>Master in Human-Computer Interaction at Carnegie Mellon University. </b>
                My undergraduate degrees were in Neuroscience and Computer Science.</p>
                <p>I was previously a Platform Developer intern at SAP, and have worked in multiple
                    academic research labs doing EEG, VR, or development work.
                </p>
                <p>In my spare time, I'm usually finding cute dogs to pet, binge-watching cooking shows or hunting for good dim-sum.</p>
                </div>
            </div>
        </div>
        </Fade>
      </div>
    );
  }
}

export default AboutPage;