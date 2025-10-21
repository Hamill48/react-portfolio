import React from 'react';
import logo from './logo.svg';

import Welcome from './components/Welcome/Welcome.component';
import AboutMe from './components/About Me/AboutMe.component';

import './styles/global.css';

function App() {
  return (
    <>
      <Welcome />
      <AboutMe />
    </>
  );
}

export default App;
