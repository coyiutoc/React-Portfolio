import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from "./Navigation/Navigation.js";
import LandingPage from './MainPage/LandingPage/LandingPage.js';
import ProjectsPage from './MainPage/ProjectsPage/ProjectsPage.js';
import AsyncVR from './ProjectPages/Pages/AsyncVR/AsyncVR.js';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          {/* Home page */}
          <Route exact path = "/">
            <LandingPage />
            <ProjectsPage />            
          </Route>
          <Route path = "/projects/asyncvr">
            <AsyncVR />
          </Route>
          <Route path = "/projects/cuberover">
          </Route>
          <Route path = "/projects/vcl">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
