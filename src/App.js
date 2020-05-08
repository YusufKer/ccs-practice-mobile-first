import React from 'react';
import './App.css';
//importing test image
import placeholder from "./images/placeholder.jpg"

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Yusuf Keraan</h1>
        <p>lorem ipsum why are you not auto completing?</p>
      </div>
      <div className="first-grid">
        <div className="grid-item">
          <img className="image" src={placeholder}/>
        </div>
        <div className="grid-item">
          <img className="image" src={placeholder}/>  
        </div>
        <div className="grid-item">
          <img className="image" src={placeholder}/>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
}

export default App;
