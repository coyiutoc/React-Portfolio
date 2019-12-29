import asyncVRImg from "../assets/imgs/async-vr.png";
import VCLImg from "../assets/imgs/vcl.png";
import cuberoverImg from "../assets/imgs/cuberover.png";
import magnoliasImg from '../assets/imgs/magnolias.jpg';
import atlantisImg from "../assets/imgs/atlantis2.jpg";
import metImg from "../assets/imgs/met.png";
import ubcVizImg from "../assets/imgs/faculty-viz.png";
import madLabImg from "../assets/imgs/madlab.jpg";
import saveOnImg from "../assets/imgs/save-on.png";
import surfcalImg from "../assets/imgs/surfcal.png";

import UCREPoster from "../assets/files/artist-always-in.jpg";
import atlantisVideo from "../assets/files/atlantis-hub-video.mp4";
import saveOnDemo from "../assets/files/saveon_demo.gif";
import surfCalDemo from "../assets/files/surfcal_demo.gif";

const PROJECT_DATA = {
  main: [
    {
      img: cuberoverImg,
      title: "CubeRover",
      subtitle: "UI DEVELOPMENT",
      text: "Development of UI components for the ground interface for CubeRover, a space rover launching to the Moon in 2021 with $79.5 million NASA funding.",
      stack: "VUE/VUEX | D3.JS",
      pageURL: "/projects/cuberover",
    },
    {
      img: asyncVRImg,
      title: "Async VR",
      subtitle: "UX RESEARCH & DEVELOPMENT",
      text: "Research on asynchronous VR collaboration at UBC's Multimodal User Experience Lab. Was involved in ideating new features, implementation, and usability testing. 2nd author in publication accepted into CSCW 2019.",
      stack: "HTC VIVE | UNITY | C# | USABILITY TESTING",
      pageURL: "/projects/asyncvr",
    },
    {
      img: VCLImg,
      title: "VCL Web Framework",
      subtitle: "UX RESEARCH & DEVELOPMENT",
      text: "Redesign and modernization of the UBC Visual Cognition Lab's experimental framework. Iteratively designed and developed the framework so that it would be easily extendable by researchers in the lab. 2nd author in abstract submitted to VSS 2020.",
      stack: "D3.JS | NODE.JS | JSPSYCH | EXPLORATORY STUDY",
      pageURL: "/projects/vcl",
    },
  ],
  sub: [
    {
      img: magnoliasImg,
      title: "The Artist is Always In",
      subtitle: "UX RESEARCH",
      text: "UX research focusing on adding transparency to the public art process. Produced a prototype for an on-site physical display that citizens can interact with.",
      stack: "OBSERVE & INTERCEPT | SPEED DATING | THINK-ALOUDS | EXPERIENCE PROTOTYPING",
      date:  "OCT - DEC 2019",
      icons: [
        {iconType: "IMAGE", URL: UCREPoster}
      ],
      readMore: true,
    },
    {
      img: atlantisImg,
      title: "Atlantis Transit Hub",
      subtitle: "UX DESIGN",
      text: "Produced a high-fidelity data-driven display for the transit hub on San Juan Island using persona stakeholders and data on trip arrivals/departures.",
      stack: "FIGMA",
      date:  "OCT - NOV 2019",
      icons: [
        {iconType: "IMAGE", URL: atlantisVideo}
      ],
      readMore: false,
    },
    {
      img: metImg,
      title: "Met Visualizations",
      subtitle: "DEVELOPMENT",
      text: "A series of visualizations displaying the distribution of the Metropolitan Museum of Art's collection by location, time, medium and artist. Extracted data using python scripts to ping the Met's API.",
      stack: "D3.JS | PYTHON | FLASK",
      date:  "OCT - DEC 2019",
      icons: [
        {iconType: "WEBSITE", URL: "https://ketakisrao.github.io/Met/"},
        {iconType: "GITHUB", URL: "https://github.com/ketakisrao/Met"}
      ],
      readMore: false,
    },
    {
      img: ubcVizImg,
      title: "UBC Faculty Visualizations",
      subtitle: "DEVELOPMENT",
      text: "Data visualizations on gender differences for faculty renumeration at UBC. Data was extracted from the 2018 faculty report and directory using a python web-crawler.",
      stack: "D3.JS | PYTHON | NODE.JS",
      date:  "JUN - JUL 2019",
      icons: [
        {iconType: "WEBSITE", URL: "https://ubc-faculty-viz.herokuapp.com/"},
        {iconType: "GITHUB", URL: "https://github.com/coyiutoc/UBC-Faculty-Viz"}
      ],
      readMore: false,
    },
    {
      img: saveOnImg,
      title: "Save-On Foods",
      subtitle: "UX RESEARCH & DESIGN",
      text: "Involved an assessment of usability issues for the currently existing Save-On Foods website, and the creation of a med-fi prototype to remedy these issues.",
      stack: "COGNITIVE WALKTHROUGH | THINK-ALOUD | USABILITY-TESTING",
      date:  "AUG - NOV 2018",
      icons: [
        {iconType: "IMAGE", URL: saveOnDemo},
      ],
      readMore: true,
    },
    {
      img: surfcalImg,
      title: "SURFCal",
      subtitle: "DEVELOPMENT",
      text: "Designed and built a relational database to support functionality of a calendar web app. Database adhered to DBMS normalization forms such as BCNF and 3NF.",
      stack: "MYSQL | PHP | APACHE",
      date:  "MAY - JUN 2018",
      icons: [
        {iconType: "IMAGE", URL: surfCalDemo},
      ],
      readMore: false,
    },
    {
      img: madLabImg,
      title: "Frontal EEG Asymmetries",
      subtitle: "NEUROSCIENCE RESEARCH",
      text: "Research on identifying a frontal asymmetry profile for irritability using electroencephalography (EEG). Awarded Wellesley College Student Library Award for Independent Study.",
      stack: "SPSS | BRAINVISION ANALYER/RECORDER",
      date:  "AUG - DEC 2015",
      icons: [
        {iconType: "WEBSITE", URL: "https://repository.wellesley.edu/library_awards/16/"},
      ],
      readMore: false,
    },
  ]
};

export default PROJECT_DATA;
