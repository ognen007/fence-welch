// store.js
import { configureStore } from '@reduxjs/toolkit';
import drawingParcelReducer from './drawingParcelSlice';
import formDataReducer from './formDataSlice';

export default configureStore({
  reducer: {
    drawingParcel: drawingParcelReducer,
    formData: formDataReducer,
  },
});
