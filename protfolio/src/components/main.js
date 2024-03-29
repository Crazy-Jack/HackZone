import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landing-page';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Blog from './blog';


const Main = () => (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/blog" component={Blog} />



    </Switch>
)

export default Main;
