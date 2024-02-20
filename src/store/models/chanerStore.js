import {createSlice } from '@reduxjs/toolkit';

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    list: []
  },
  reducers: {
    getlist: (state, actions) => {
      console.log(actions);
      state.list = actions.payload
    }
  }
});

export const { getlist } = channelStore.actions;
export default channelStore.reducer;