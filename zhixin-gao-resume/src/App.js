import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      {/* You can continue adding other sections similarly */}
    </div>
  );
}

export default App;
