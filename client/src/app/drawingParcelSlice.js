import { createSlice } from '@reduxjs/toolkit';

export const drawingParcelSlice = createSlice({
  name: 'drawingParcel',
  initialState: {
    data: '',
  },
  reducers: {
    setDrawingParcel: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDrawingParcel } = drawingParcelSlice.actions;
export default drawingParcelSlice.reducer;
