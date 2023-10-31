import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Map from "./components/Map";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Map />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
