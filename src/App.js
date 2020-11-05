import { hot } from 'react-hot-loader';
import React, { Component } from 'react';

import Header from './components/header/header.component.jsx';
import Hero from './components/hero/hero.component.jsx';
import Introduction from './components/introduction/introduction.component.jsx';
import About from './components/about/about.component.jsx';
import Projects from './components/projects/projects.component.jsx';
import Contact from './components/contact/contact.component.jsx';
import Footer from './components/footer/footer.component.jsx';

import './App.css';

class App extends Component
{
  render()
  {
    return (
      <div className='App'>
        <Header />
        <Hero />
        <Introduction />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);