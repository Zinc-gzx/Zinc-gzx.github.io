import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Extracurricular from './components/Extracurricular';
import SkillsAndLanguages from './components/SkillsAndLanguages';

function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Projects />
      <Extracurricular />
      <SkillsAndLanguages />
    </div>
  );
}

export default App;
