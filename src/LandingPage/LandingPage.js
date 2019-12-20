import React, {Component} from "react";
import "./LandingPage.scss";

class LandingPage extends Component {

  render () {
    return (
      <div id="LandingPage">
        <div class = "landing-body">
          <div class = "typewriter"> 
            <div class = "typewriter-container">
              <h1>Hi, I'm Caitlin.</h1>
            </div>
          </div>
          <br></br>
          I'm a weird mix between a <b>designer</b> and <b>developer</b>. 
          <br></br>
          <br></br>
          <div class="tag-line">Currently, I'm pursuing my Masters in Human-Computer <br></br> Interaction at Carnegie Mellon University.</div>
        </div>
        {/* <div class = "landing-body">
          <div class="tag-line">
            I'm a weird cross between a researcher, programmer and musicophile.
          </div>
        </div>
        <div class = "down-arrow">
          <h2>></h2>
        </div> */}
      </div>
    );
  }
}

export default LandingPage;