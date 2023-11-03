import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home2 from './components/pages/Home2';
import OptionPage from './components/pages/OptionPage';
import Drawing from './components/pages/Drawing';
import Map from './components/pages/Map';
import SubmitForm from './components/pages/SubmitForm';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/style" element={<OptionPage />} />
          <Route path="/draw-my-fence" element={<Drawing />} />
          <Route path="/map" element={<Map />} />
          <Route path="/submit" element={<SubmitForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
