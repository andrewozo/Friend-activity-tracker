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

export const fetchSingleActivity = createAsyncThunk(
  "fetchSingleActivtiy",
  async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/activities/${id}`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addNewActivity = createAsyncThunk(
  "addNewActivity",
  async ({ spotName, amount, putCardDown, date }) => {
    try {
      console.log({ spotName, amount, putCardDown, date });
      const { data } = await axios.post("http://localhost:8080/activities", {
        spotName,
        amount,
        putCardDown,
        date,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteActivity = createAsyncThunk("deleteActivity", async (id) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:8080/activities/${id}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
});

const activitiesSlice = createSlice({
  name: "activites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllActivities.fulfilled, (state, action) => {
      state.allActivities = action.payload;
    });
    builder.addCase(fetchSingleActivity.fulfilled, (state, action) => {
      state.singleActivity = action.payload;
    });
    builder.addCase(addNewActivity.fulfilled, (state, action) => {
      state.allActivities.push(action.payload);
    });
    builder.addCase(deleteActivity.fulfilled, (state, action) => {
      state.singleActivity = action.payload;
    });
  },
});

export default activitiesSlice.reducer;
