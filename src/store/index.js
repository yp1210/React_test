import { configureStore } from "@reduxjs/toolkit";
import counterStore from "./models/counterStore";
import chanerStore from "./models/chanerStore";
import timeStore from "./models/timeStore";

export default configureStore({
  reducer: {
    counter: counterStore,
    channel: chanerStore,
    time: timeStore,
  },
});
