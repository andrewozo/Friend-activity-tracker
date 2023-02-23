import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from "../components/Activites/activitiesSlice";

const store = configureStore({
  reducer: {
    activities: activitiesReducer,
  },
});

export default store;
