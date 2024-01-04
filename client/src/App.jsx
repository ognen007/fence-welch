import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home2 from './components/pages/Home2';
import OptionPage from './components/pages/OptionPage';
import Drawing from './components/pages/Drawing';
import Map from './components/pages/Map';
import SubmitForm from './components/pages/SubmitForm';
import FenceGallery from './components/pages/FenceGallery';
import WoodCarousel from "./components/pages/WoodCarousel"
import ChainCarousel from "./components/pages/ChainCarousel"
import VinylCarousel from "./components/pages/VinylCarousel"
import OrnamentalCarousel from "./components/pages/OrnamentalCarousel"
import Thanks from './components/pages/Thanks';
import {Provider} from "react-redux"
import store from "../src/app/store"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/style" element={<FenceGallery />} />
          <Route path="/wood" element={<WoodCarousel />} />
          <Route path="/chain" element={<ChainCarousel />} />
          <Route path="/vinyl" element={<VinylCarousel />} />
          <Route path="/ornamental" element={<OrnamentalCarousel />} />
          <Route path="/draw-my-fence" element={<Drawing />} />
          <Route path="/map" element={<Map />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/submit" element={<SubmitForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
