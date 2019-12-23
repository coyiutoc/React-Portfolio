import React, {Component} from "react";
import {useSpring, animated, config} from 'react-spring'
import "./LandingPage.scss";

function LandingPage () {

    let contentProps = useSpring({config: {duration: 1000}, delay: 1200, opacity: 1, from: {opacity: 0}});
    let scrollProps = useSpring({config: {duration: 1000}, delay: 1500, opacity: 1, from: {opacity: 0}});

    return (
      <div id="LandingPage">
        <div className = "landing-body">
          <div className = "typewriter"> 
            <div className = "typewriter-container">
              <h1>Hi, I'm Caitlin.</h1>
            </div>
          </div>
          <animated.div className = "landing-body-contents" style={contentProps}>
            <br></br>
            I'm a weird mix between a <b>researcher</b> and <b>developer</b>. 
            <br></br>
            <br></br>
            <div className ="tag-line">Currently, I'm pursuing my Masters in Human-Computer Interaction at Carnegie Mellon University.</div>
          </animated.div>
        </div>
        <animated.div className = "down-arrow" style={scrollProps}>
          SCROLL
        </animated.div>
      </div>
    );
}

export default LandingPage;