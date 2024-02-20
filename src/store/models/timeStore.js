import { createSlice } from '@reduxjs/toolkit';

const timeStore = createSlice({
  name: 'time',
  initialState: {
    nowDate: null,
  },
  reducers: {
    getCurrentTime: (state, actions) => {
      state.nowDate = actions.payload
    }
  }
});

export const { getCurrentTime } = timeStore.actions;
export default timeStore.reducer;