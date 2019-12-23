import React, {Component} from "react";
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';
import img from '../../assets/imgs/magnolias.jpg';

import "./ProjectMiniBlock.scss";
import "../ProjectBlock/ProjectBlock.scss";

class ProjectMiniBlock extends Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
      <Fade big>
        <MediaQuery minWidth={992}>
          <div className="project-mini-block">
            <div className="project-mini-content">
              <div className="project-mini-title">
                The Artist is Always In
              </div>
              <div className="project-mini-taglines">
                <div className="project-mini-subtitle">
                  UX RESEARCH
                </div>
              </div>
              <div className="project-mini-divider">
              </div>
              <div className="project-mini-text">
                UX research focusing on adding transparency to the public art process. Produced an on-site physical display
                that citizens can interact with. 
              </div>
              <div className="project-mini-stack">
                CONTEXTUAL INQUIRY | THINK-ALOUD | SPEED DATING
              </div>
              <div className="project-mini-icons">
                <div className="project-mini-date">
                  OCT - DEC 2019
                </div>
                <a href = ""><i class="fab fa-github"></i></a>
                <a href = ""><i class="fab fa-github"></i></a>
              </div>
            </div>
            <img src = {img}></img>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <div className="project-block-sm">
            <div className="project-img-sm">
              <div className="project-img-overlay">
                <div className="project-text-sm">
                  <div className="project-title-sm">
                    The Artist is Always In
                  </div>
                  <div className="project-subtitle-sm">
                    UX RESEARCH
                  </div>
                  <div className="project-divider-sm"></div>
                  <div className="project-body-sm">
                  UX research focusing on adding transparency to the public art process. Produced an on-site physical display
                  that citizens can interact with. 
                  </div>
                  <div className="project-stack-sm">
                  CONTEXTUAL INQUIRY | THINK-ALOUD | SPEED DATING
                  </div>
                  <div className="project-mini-icons">
                    <div className="project-mini-date">
                      OCT - DEC 2019
                    </div>
                    <a href = ""><i class="fab fa-github"></i></a>
                    <a href = ""><i class="fab fa-github"></i></a>
                    </div>
                  </div>
              </div>
              <img src={img}></img>
            </div>
          </div>
        </MediaQuery>
      </Fade>
    );
  }
}

export default ProjectMiniBlock;