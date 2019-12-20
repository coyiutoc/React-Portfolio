import React from 'react';
import Navigation from "./Navigation/Navigation.js";
import LandingPage from './LandingPage/LandingPage.js';
import ProjectsPage from './ProjectsPage/ProjectsPage.js';

function App() {
  return (
    <div>
      <Navigation />
      <LandingPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
