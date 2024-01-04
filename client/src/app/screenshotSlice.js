import { createSlice } from '@reduxjs/toolkit';

export const screenshotSlice = createSlice({
  name: 'screenshotData',
  initialState: {
    data: '',
  },
  reducers: {
    setScreenshotData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setScreenshotData } = screenshotSlice.actions;
export default screenshotSlice.reducer;
