import React from "react";
import PaletteSelectButton from "./components/PaletteSelectButton"
import LinkSelectButton from "./components/LinkSelectButton"
import StartButton from "./components/StartButton"
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <div>
        <PaletteSelectButton />
      </div>
      <br></br>
      <div>
        <LinkSelectButton />
      </div>
      <br></br>
      <div>
      <StartButton />
      </div>
      
    </div>
  
  );
}

export default App;
