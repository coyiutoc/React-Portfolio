import React, {Component} from "react";
import HeadingBlock from "../../Components/HeadingBlock/HeadingBlock.js";
import Section from "../../Components/Section/Section.js";
import Conclusion from "../../Components/Conclusion/Conclusion.js";
import "../../ProjectPage.scss";

import headerImg from "../../../assets/pages/asyncvr/async-vr.png";
import affinity1 from "../../../assets/pages/asyncvr/affinity-1.jpg";
import affinity2 from "../../../assets/pages/asyncvr/affinity-2.jpg";
import ideationBig from "../../../assets/pages/asyncvr/Ideation-formatted.jpg";

class AsyncVR extends Component {

  render () {

    const data = {
      header: {
        img: headerImg,
        title: "Asynchronous VR Collaboration",
        role: ["Research Assistant", "(UX Researcher & Developer)"],
        team: ["Kevin Chow", "Dr. Dongwook Yoon", "Dr. Cuong Nguyen"],
        stack: ["Unity/C#", "HTC Vive", "Content Analysis", "Usability Testing"],
        timeline: "Sep 2018 - Apr 2019",
        body: "The Asynchronous VR Collaboration project is one of the ongoing HCI research projects within the Multimodal User Experience Lab. This research specifically seeks to identify how users utilize multimodal expressions, such as speech, body language and scene manipulation, when reviewing and creating VR recordings."
      },
      sections: [
        {
          title: "Thematic Content Analysis",
          timeline: "SEP 2018 - DEC 2019",
          tagline: "Analyzing transcription and video data - how are deictic gestures used?",
          body: ["Performed qualitative analysis using thematic coding techniques on post-task interview transcriptions. The analysis served to cross-validate results from other research assistants and to identify new concepts previously buried.",
                 "Identified 147 concepts, and aggregated them into 24 themes through multiple iterations."],
          img: null
        },
        {
          title: "Ideation",
          timeline: "JAN 2019",
          tagline: "Affinity diagramming potential solutions for the key issues found from our analyses.",
          body: ["Performed qualitative analysis using thematic coding techniques on post-task interview transcriptions. The analysis served to cross-validate results from other research assistants and to identify new concepts previously buried.",
                 "Identified 147 concepts, and aggregated them into 24 themes through multiple iterations."],
          img: [affinity1, affinity2]
        },
        {
          title: "Ideation",
          timeline: "JAN 2019",
          tagline: "Affinity diagramming potential solutions for the key issues found from our analyses.",
          body: ["Performed qualitative analysis using thematic coding techniques on post-task interview transcriptions. The analysis served to cross-validate results from other research assistants and to identify new concepts previously buried.",
                 "Identified 147 concepts, and aggregated them into 24 themes through multiple iterations."],
          img: [ideationBig]
        }
      ],
      conclusion: "The Asynchronous VR Collaboration project is one of the ongoing HCI research projects within the Multimodal User Experience Lab. This research specifically seeks to identify how users utilize multimodal expressions, such as speech, body language and scene manipulation, when reviewing and creating VR recordings."
    };

    return (
      <div className="project-page">
        <HeadingBlock data={data.header}/>
        {data.sections.map(function(section, index){
            return  <Section 
                     key = {index}
                     data = {section}/>
        })}
        <Conclusion conclusion={data.conclusion}/>
      </div>
    );
  }
}

export default AsyncVR;