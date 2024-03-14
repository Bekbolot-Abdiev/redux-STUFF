import { configureStore } from "@reduxjs/toolkit";
import productsSlices from "./slices/productsSlices";

// import { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    products: productsSlices,
  },
});

export default store;
