// count仓库
import { createSlice } from '@reduxjs/toolkit';

const counterStore = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    inc: (state) =>{
      state.count ++
    },
    de:(state, { payload = 1 }) => {
      state.count -= payload
    }
  }
})

export const { inc, de } = counterStore.actions;
export default counterStore.reducer;