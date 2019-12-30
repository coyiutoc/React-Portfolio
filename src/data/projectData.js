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

const data = {
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
        timeline: "SEP 2018 - DEC 2019",
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
              "The solutions that we finalized were: (1) providing a 'git diff' mechanic so that users can view changes between their timeline and that of the recording, (2) allowing 'x-ray' vision, where users can then view any occluded items or the avatar itself, and (3) rendering the avatar's FUTURE position when the user attempts to teleport, thereby showing them where potential avatar-user collisions would occur."],
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