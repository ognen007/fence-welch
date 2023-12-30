// store.js
import { configureStore } from '@reduxjs/toolkit';
import drawingParcelReducer from './drawingParcelSlice';
import formDataReducer from './formDataSlice';
import screenshotDataReducer from './screenshotSlice';

export default configureStore({
  reducer: {
    drawingParcel: drawingParcelReducer,
    formData: formDataReducer,
    screenshotData: screenshotDataReducer,
  },
});
