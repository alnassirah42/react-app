import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Projects from './components/Projects';
import Scroller from './components/Scroller';
import About from './components/About';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Header />
      <About /> 
      <Projects />
      <Skills />
      <ContactMe/>
      <Footer/>
      <Scroller />
    </main>
  );
}

export default App;
