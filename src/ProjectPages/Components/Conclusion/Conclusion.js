import React, {Component} from "react";
import Fade from 'react-reveal/Fade';
import "./Conclusion.scss";
import { thisExpression } from "@babel/types";

class Conclusion extends Component {

  render () {
    return (
      <div className="conclusion">
        <Fade>
          <div className="conclusion-body">
            <div className="conclusion-title">
              Conclusion
            </div>
            <div className="conclusion-divider">
            </div>
            <div className="conclusion-content">
              {this.props.conclusion}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Conclusion;

