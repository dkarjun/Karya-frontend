import React from 'react';
import Header from './Header.js'
import '../style/App.css';
import Dashboard from './Dashboard.js';

function App() {
  return (
    <div className="App">
      <div id="header"><Header/></div>
      <div id="dashboard"><Dashboard/></div>
    </div>
  );
}

export default App;
