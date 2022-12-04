import { useState } from 'react';
import Navbar from './Components/Navbar';
import Newsbox from './Components/Newsbox';
import Contact from './Components/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState(false);

  function modeHandler() {

    if (mode) {
      setMode(false);
      document.body.style.backgroundColor = 'white'
    } else {
      setMode(true);
      document.body.style.backgroundColor = 'gray'
    }
  }

  return (
    <div className="App">
     

      <BrowserRouter>
      <Navbar mode={mode} modeHandler={modeHandler} />
        <Routes>
          <Route path="/" element={<Newsbox mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode}/>} />
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
