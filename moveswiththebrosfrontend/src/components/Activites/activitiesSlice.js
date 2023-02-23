import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { allActivities: [], singleActivity: {} };

export const fetchAllActivities = createAsyncThunk(
  "fetchAllActivites",
  async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/activities");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const activitiesSlice = createSlice({
  name: "activites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllActivities.fulfilled, (state, action) => {
      state.allActivities = action.payload;
    });
  },
});

export default activitiesSlice.reducer;
