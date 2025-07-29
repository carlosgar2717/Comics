import { configureStore } from "@reduxjs/toolkit";

let userReducer = {};
const store = configureStore({
  reducer: {
    data: {
      user: userReducer,
    },
  },
});

export default store;
