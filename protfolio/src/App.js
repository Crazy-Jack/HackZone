import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Content, Drawer} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="Hack Zone" scroll>
                    <Navigation>
                        <Link to="/blog">Blog</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/blog">Blog</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
