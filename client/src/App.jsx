import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./components/pages/Home2";
import OptionPage from "./components/pages/OptionPage";
import Drawing from "./components/pages/Drawing";
import Map from "./components/pages/Map";
import SubmitForm from "./components/pages/SubmitForm";

const App = () => {
  const [formData, setFormData] = useState({
    drawingData: null,
    mapData: null,
  });

  const handleDrawingData = (data) => {
    setFormData({ ...formData, drawingData: data });
  };

  const handleMapData = (data) => {
    setFormData({ ...formData, mapData: data });
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/style" element={<OptionPage />} />
          <Route
            path="/draw-my-fence"
            element={<Drawing onDrawingData={handleDrawingData} />}
          />
          <Route path="/map" element={<Map onMapData={handleMapData} />} />
          <Route path="/submit" element={<SubmitForm formData={formData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
