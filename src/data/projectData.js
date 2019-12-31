// CubeRover
import cuberoverHeader from "../assets/pages/cuberover/headercuberover.png";
import designspec from "../assets/pages/cuberover/designspec.png";
import visibilityToggle from "../assets/pages/cuberover/visibilitytoggle.gif";
import newroute from "../assets/pages/cuberover/newroute.gif";

// AsyncVR
import asyncheaderImg from "../assets/pages/asyncvr/async-vr.png";
import affinity1 from "../assets/pages/asyncvr/affinity-1.jpg";
import affinity2 from "../assets/pages/asyncvr/affinity-2.jpg";
import ideationBig from "../assets/pages/asyncvr/Ideation-formatted.jpg";
import GitDiff from "../assets/pages/asyncvr/Git-Diff.jpg";
import LocatingAvatar from "../assets/pages/asyncvr/Locating-Avatar.jpg";
import BreachOfSpace from "../assets/pages/asyncvr/Breach-of-Space.jpg";
import proxemic from "../assets/pages/asyncvr/proxemic.gif";
import gitdiffgif from "../assets/pages/asyncvr/gitdiff.gif";
import xRay from "../assets/pages/asyncvr/x-ray.gif";
import asyncVRvideo from "../assets/pages/asyncvr/cscw040.mp4";

// VCL
import vclheader from "../assets/pages/vcl/vclheader.JPG";

const data = {
  vcl: {
    header: {
      img: vclheader,
      title: "VCL Web Framework",
      role: ["Research Assistant (Developer)"],
      team: ["Prof. Ronald Rensink", "Madison Elliot", "VCL Correlations Team"],
      stack: ["Node.js", "D3.js", "Javascript", "JsPsych", "HTML/CSS"],
      timeline: "May 2018 - July 2019",
      body: "This project involves modernizing the Visual Cognition Lab's existing Java codebase to utilize modern web technologies. The old codebase had suffered from a lack of software maintenance and documentation updates, which led to many researchers having to 'hack' a version of the codebase to suit their needs, resulting in a proliferation of bugs and poor extensibility. <b>My challenge was to design a new framework in such a way that it would be easy to learn, use and extend by other researchers</b>, who many not necessarily have any formal programming experience, but must implement new visual experiments.",
      icons: [
        {iconType: "GITHUB", URL: "https://github.com/coyiutoc/VCL-Web-Framework", text: "Github Repository"},
        {iconType: "WEBSITE", URL: "https://vcl-web-framework.herokuapp.com/", text: "Deployed Framework"},
        {iconType: "IMAGE", URL: "https://ubc-vcl.github.io/VCLWebFramework/manual/README.html", text: "Framework Documentation"},
      ],
    },
  },
  cuberover: {
    header: {
      img: cuberoverHeader,
      title: "CubeRover",
      role: ["Front End Developer"],
      team: ["Astrobotic", "CubeRover TeleOps UI Development Team"],
      stack: ["Vue/Vuex", "D3.js", "Javascript", "HTML/SCSS"],
      timeline: "Sep 2019 - Present",
      body: "CubeRover is a 4.4lb lunar rover with a <b>$79.5 million NASA funding</b>, and is expected to <b>launch to the Moon in 2021</b>. Together with the private company, Astrobotic, students of CMU from multiple disciplines have come together to help build this light-weight rover. I am a part of the <b>Tele-Operations team</b>, and we are responsible for designing and implementing the features for remote controlling of the rover from Earth. I am specifically responsible for implementing the <b>map feature for the ground interface.</b>",
    },
    sections: [
      {
        title: "Atomic Components",
        timeline: "SEP - OCT 2019",
        tagline: "Implementing a series of reusable UI components.",
        body: ["When I first joined the team, I assisted in developing a series of UI components given the specifications provided from the design team. Some of these components included a variety of buttons, sliders, toggles and radio buttons. All of these components utilized Vuex, making it easy for future developers as event watching for clicks/hovers are now automatically built in.",
              ],
        img: [designspec]
      },
      {
        title: "Grid and Route Manager",
        timeline: "OCT - NOV 2019",
        tagline: "Developing the base grid coordinate system and controls for route visibility toggling.",
        body: ["The very base component of the entire map feature is the grid. Using D3.js, I implemented an infinitely pannable grid, with customizable zoom extents. Afterwards, key objects, such as the lander, rover, and potential rover routes could be plotted. To help the operators view select routes, the Route Manager feature provides a list of all currently saved routes, and allows the user to toggle the visibility of any route.",
              ],
        img: [visibilityToggle]
      },
      {
        title: "Creating New Routes and Segments",
        timeline: "NOV - DEC 2019",
        tagline: "Implementing functionality to add a new route, and to append segments to an existing route.",
        body: ["There are two ways to add a new route - either by using absolute (with respect to the lander) or relative (with respect to the rover) coordinates. I implemented both these functionalities, along with displaying a preview of a new route prior to saving it. Additionally, this UI allows users to add new segments onto any pre-existing route, and is supportive of both absolute and relative segments.",
              ],
        img: [newroute]
      },
    ],
    conclusion: {
      title: "Future Directions",
      body: "Base functionality for the map feature has been implemented - however, there are still multiple sub-features that must be developed, such as editing a route, or plotting new objects onto the interface. Some of these sub-features will be integrated with other components within the ground interface, such as the image viewer. These are just some examples of the work head for the Spring semester."
    }
  },

  asyncvr: {
    header: {
      img: asyncheaderImg,
      title: "Asynchronous VR Collaboration",
      role: ["Research Assistant", "(UX Researcher & Developer)"],
      team: ["Kevin Chow", "Dr. Dongwook Yoon", "Dr. Cuong Nguyen"],
      stack: ["Unity/C#", "HTC Vive", "Content Analysis", "Usability Testing"],
      timeline: "Sep 2018 - Apr 2019",
      body: "I was involved in research on identifying design challenges and solutions for <b>multimodal asynchronous VR collaboration (MAVRC)</b>. This is essentially a form of VR collaboration where users make a VR recording, thereby allowing others to view and interact with that recording in the 3D space. Our work was published in <b>CSCW 2019</b>.",
      icons: [
        {iconType: "IMAGE", URL: "https://dl.acm.org/doi/10.1145/3359142", text: "CSCW 2019 Paper"},
        {iconType: "VIDEO", URL: asyncVRvideo, text: "Video"}
      ],
    },
    sections: [
      {
        title: "Identifying User Challenges in an MAVRC System",
        timeline: "SEP - DEC 2018",
        tagline: "Performed thematic content analysis of transcription and video data.",
        body: ["In the summer of 2018, the team had already performed a series of usability studies on the MAVRC system. My responsibility was to then perform qualitative analysis using thematic coding on all the post-task interview transcriptions. My analysis served to cross-validate results from other research assistants, and to identify new concepts that were previously buried.",
              "The final product of this analysis was an identification of <b>147 concepts</b>, which were then aggregated into <b>24 themes</b> through multiple iterations."],
        img: null
      },
      {
        title: "Ideating Design Solutions",
        timeline: "JAN 2019",
        tagline: "Affinity diagramming and brainstorming potential design solutions.",
        body: ["Among the user challenges identified from the analysis phase, we narrowed these to a key few, such as users experiencing a breach of personal space when the avatar in the recording teleports into their area, or users experiencing a sense of disorientation when switching between different recordings.",
              "I did some affinity diagramming and sketching to help ideate potential solutions for these issues."],
        img: [affinity1, affinity2, ideationBig]
      },
      {
        title: "Storyboarding",
        timeline: "JAN 2019",
        tagline: "Detailed storyboarding of the core design solutions.",
        body: ["After the ideation phase, we narrowed our focus to four particular user challenges. I was in charge of storyboarding and fleshing out the design for 3/4 of the challenges, they being: (1) immersion in VR can overload and disorient, (2) there is a need to view an avatar's intention and action, and (3) users experience a breach of personal space due to avatar movement.",
              "The solutions that we finalized were: (1) providing a 'git diff' mechanic so that users can <b>view changes between their timeline and that of the recording</b>, (2) allowing 'x-ray' vision, where users can then <b>view any occluded items or the avatar itself</b>, and (3) <b>rendering the avatar's FUTURE position</b> when the user attempts to teleport, thereby showing them where potential avatar-user collisions would occur."],
        img: [GitDiff, BreachOfSpace, LocatingAvatar]
      },
      {
        title: "Development",
        timeline: "FEB - MAR 2019",
        tagline: "Implementing the design solutions in Unity/C#.",
        body: ["I then was responsible for implementing the three solutions into the currently existing MAVRC system. These features were proof-of-conceptt (POC) features, which we would then test in another series of usability studies.",
              ],
        img: [proxemic, gitdiffgif, xRay]
      },
      {
        title: "Usability Testing",
        timeline: "MAR - APR 2019",
        tagline: "Running usability studies to assess the POC features.",
        body: ["I ran 8 usability studies to evaluate these new features. We asked participants to perform a series of tasks, in which they would have the opportunity to perform the task once with and once without the assistance of the new feature.",
              ],
        img: null
      }
    ],
    conclusion: {
      title: "Conclusion",
      body: "We found that overall, users held a positive attitude for all our interaction techniques, with many commonly finding that tasks were easier to perform, and that the features allowed users to better concentrate on the task at hand. Nonetheless, future iteration on these techniques is necessary, given that they were developed for a particular 3D environment and scenario, and do not handle all tasks that users may perform in a collaborative asynchronous environment. Exploring these features’ extendibility into large-scale environments, differing definitions of version control (e.g. not restricted to simply object position changes), and the presence of multiple collaborators in a given multimodal recording may prove to be worthwhile avenues for research."
    }
  }
};

export default data;