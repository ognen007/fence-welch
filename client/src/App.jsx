import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home2 from './components/pages/Home2';
import OptionPage from './components/pages/OptionPage';
import Drawing from './components/pages/Drawing';
import Map from './components/pages/Map';
import SubmitForm from './components/pages/SubmitForm';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/style" element={<OptionPage />} />
          <Route path="/draw-my-fence" element={<Drawing />} />
          <Route path="/map" element={<Map />} />
          <Route path="/submit" element={<SubmitForm />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
