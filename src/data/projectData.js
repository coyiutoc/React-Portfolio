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
import pocgif from "../assets/pages/vcl/poc.gif";
import flowDiagram from "../assets/pages/vcl/flow_diagram.jpg";
import visualsearchgif from "../assets/pages/vcl/visual_search.gif";
import vcldocs1 from "../assets/pages/vcl/docs1.png";
import vcldocs2 from "../assets/pages/vcl/docs2.png";

const data = {
  vcl: {
    header: {
      img: vclheader,
      title: "VCL Web Framework",
      role: ["Research Assistant (Developer)"],
      team: ["Dr. Ronald Rensink", "Madison Elliot", "VCL Correlation Team"],
      stack: ["Node.js", "D3.js", "Javascript", "JsPsych", "HTML/CSS"],
      timeline: "May 2018 - July 2019",
      body: "The Visual Cognition Lab's java codebase had suffered from a lack of software maintenance and documentation updates, which led to many researchers having to 'hack' a version of the codebase to suit their needs, resulting in a proliferation of bugs and poor extensibility. <b>My challenge was to design a new web framework in such a way that it would be easy to learn, use and extend by other researchers</b>, who many not necessarily have any formal programming experience, but must code new visual experiments.",
      icons: [
        {iconType: "GITHUB", URL: "https://github.com/coyiutoc/VCL-Web-Framework", text: "Github Repository"},
        {iconType: "WEBSITE", URL: "https://vcl-web-framework.herokuapp.com/", text: "Deployed Framework"},
        {iconType: "IMAGE", URL: "https://ubc-vcl.github.io/VCLWebFramework/manual/README.html", text: "Framework Documentation"},
      ],
    },
    sections: [
      {
        title: "Literature Review & Information Gathering",
        timeline: "MAY 2018",
        tagline: "Researching potential web frameworks/libraries for vision science and conducting informal interviews.",
        body: ["Prior to beginning any form of development, I first conducted a literature review of web frameworks used in vision science labs. Potential tools that were considered included JsPsych, D3.js, PsychoPy, E-Prime and MATLAB.",
               "I additionally interviewed other members of the lab about their experiences with the current codebase, and how they were implementing new experiments. It appeared that many researchers were 'hacking' the code to fit their needs, making the codebase buggy, and were additionally not performing proper documentation of any major changes."
              ],
        img: null,
      },
      {
        title: "Proof of Concept Experiments",
        timeline: "JUN - JULY 2018",
        tagline: "Implementing a standard visual experiment using web technologies.",
        body: ["After discussions with other members of the team, I narrowed the potential technologies to be used to JsPsych for experimental control, D3.js for visualization, and Node.js for the backend.",
               "I then implemented a standard visual experiment, a JND (Just Noticeable Difference) task, in which a participant had to discern which scatter plot displayed a more highly correlated dataset."
              ],
        img: [pocgif],
      },
      {
        title: "Piloting the POCs",
        timeline: "AUG 2018",
        tagline: "Validating the experiments with other researchers.",
        body: ["To ensure that output of the POC experiment was correct, researchers in the lab piloted the experiment to verify the experimental flow and data output. This was necessary to ensure visual output and performance were as expected, and comparable to that of the experiments run by the old Java codebase.",
              ],
        img: null,
      },
      {
        title: "Specification Planning",
        timeline: "SEP - OCT 2018",
        tagline: "Outlining the framework architecture.",
        body: ["Upon validating that the base, foundational experiment was correct, I performed an additional round of literature review on end-user programming methods and software development for scientific software. At this point, I was considering an <b>HCI-centric approach</b>, since I was developing a framework for researchers who did not necessarily have a lot of programming experience.",
              "Additionally, I began to outline the overall architecture of the new framework. This required looking through different forms of visual experiments that existed in the original codebase, along with validating my understanding of the experimental methodology by interviewing the other researchers. This also ensured that the terminology that I was using to name potential classes and structures were in accordance with the proper terms that researchers were using."        
              ],
        img: [flowDiagram],
      },
      {
        title: "Informal Exploratory Study",
        timeline: "NOV 2018",
        tagline: "Assessing the usability of the potential technologies to be used in the framework.",
        body: ["Before commencing formal development of the new codebase with members of the team, there was a need to validate whether additional development effort is needed to make the proposed stack more accessible for non-computer science majors.",
               "We assessed usability through an informal exploratory study, where in pairs, members of the research team implemented new visual experiments solely using Javascript, JsPsych and HTML/CSS. We were primarily trying to <b>isolate JsPsych to assess its usability from an end-user programmer perspective</b>.",
               "Feedback suggested that JsPsych is easy to use, and greatly facilitates setting up the experimental structure. What was difficult is that JsPsych does not provide any stimuli-generation functionality, so without using D3.js, visualization had to be handled by custom HTML/CSS and additional helper scripts. This therefore strengthened the need to use D3.js to support the data visualization component."
              ],
        img: [visualsearchgif],
      },
      {
        title: "Developing the Framework",
        timeline: "DEC 2018 - MAR 2019",
        tagline: "Implementing the framework with the proposed specification and stack.",
        body: ["I then began developing the full framework, in accordance with the specifications discussed, and the pro/cons identified when testing the usability of JsPsych. This whole phase was extremely iterative, in which I would build small components representing a particular form of experiment, have the researchers pilot and validate all visual output, and then fix any issues before progressing to the next component.",
              "Eventually, I reached a stage where all base experiments were implemented, and were then run on actual participants for data collection."
              ],
        img: null,
      },
      {
        title: "Dynamic Documentation",
        timeline: "APR - MAY 2019",
        tagline: "Developing documentation that dynamically updates according to changes in the codebase.",
        body: ["Once the framework was stable enough, there was one feature that I still wanted to include into this project. I found that the previous codebase had heavily suffered from poor documentation - sometimes a result of the researcher/developer forgetting to update the docs, or due to the fact that the documentation itself was fragmented and difficult to search through. I therefore wanted to develop a solution that allowed the documentation to stay updated, but with as minimal effort from the user.",
               "My solution was what I called <b>Dynamic Documentation</b>, in which the documentation itself draws from the codebase of the framework; therefore, whenever a researcher implements a new experiment, the <b>documentation automatically updates</b>, without the researcher having to manually add this information. I saw this as a way to ensure that the documentation would ALWAYS be updated, and with standardized terminology for experiments and properties."
              ],
        img: [vcldocs1, vcldocs2],
      },
    ],
    conclusion: {
      title: "Conclusion",
      body: "This project overall was a terrific learning experience - it allowed me to approach an otherwise development project with a UX perspective, and forced me to think carefully about architectural decisions. This experience also opened my eyes to who we can define as a 'user'. I think I failed to consider that I myself, a programmer, could be considered a user, especially in the context of a programming language or tool. Therefore, this project forced me to not only approach a problem from a computer-science perspective, but from a user-centric perspective."
    }
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