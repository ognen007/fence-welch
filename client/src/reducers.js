import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  response: '',
  map: '',
};

const rootReducer = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    setMap: (state, action) => {
      state.map = action.payload;
    },
  },
});

export const { setResponse, setMap } = rootReducer.actions;

export default rootReducer.reducer;