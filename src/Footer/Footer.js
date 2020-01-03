import React, {Component} from "react";
import Fade from 'react-reveal/Fade';
import "./Footer.scss";

class Footer extends Component {

  render () {

    return (
      <div className="Footer">
          <div className="text">
            <p>COPYRIGHT &#9400; 2020 CAITLIN COYIUTO</p>
            <p>Made with <i class="fab fa-react"></i> and a whole lot of <i class="fas fa-mug-hot"></i>.</p>
          </div>
          <div className = "icons">
            <p>
                <a className="icon" href = "https://www.linkedin.com/in/coyiutoc/"><i class="fab fa-linkedin"></i></a>
                <a className="icon" href = "https://github.com/coyiutoc"><i class="fab fa-github-square"></i></a>
            </p>
          </div>
      </div>
    );
  }
}

export default Footer;