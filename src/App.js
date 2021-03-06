import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'

import Navigation from "./Navigation/Navigation.js";
import LandingPage from './MainPage/LandingPage/LandingPage.js';
import ProjectsPage from './MainPage/ProjectsPage/ProjectsPage.js';
import ProjectPage from './ProjectPages/ProjectPage.js';
import AboutPage from "./AboutPage/AboutPage.js";
import Footer from "./Footer/Footer.js";

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop>
          <Navigation />
          <Switch>
            {/* Home page */}
            <Route exact path = "/">
              <LandingPage />
              <ProjectsPage />           
            </Route>
            <Route path={"/projects/:projectID"}>
              <ProjectPage />
            </Route>
            <Route path={"/About"}>
              <AboutPage />
            </Route>
          </Switch>
          <Footer /> 
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
