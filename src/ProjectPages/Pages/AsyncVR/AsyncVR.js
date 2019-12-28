import React, {Component} from "react";
import HeadingBlock from "../../Components/HeadingBlock/HeadingBlock.js";
// import "../../ProjectPage.scss";

import headerImg from "../../../assets/pages/asyncvr/async-vr.png";

class AsyncVR extends Component {

  render () {

    const data = {
      img: headerImg,
      title: "Asynchronous VR Collaboration",
      role: ["Research Assistant", "(UX Researcher & Developer)"],
      team: ["Kevin Chow", "Dr. Dongwook Yoon", "Dr. Cuong Nguyen"],
      stack: ["Unity/C#", "HTC Vive", "Usability Testing"],
      timeline: "Sep 2018 - Apr 2019",
      body: "The Asynchronous VR Collaboration project is one of the ongoing HCI research projects within the Multimodal User Experience Lab. This research specifically seeks to identify how users utilize multimodal expressions, such as speech, body language and scene manipulation, when reviewing and creating VR recordings."
    };

    return (
      <div className="project-page">
        <HeadingBlock data={data}/>
      </div>
    );
  }
}

export default AsyncVR;