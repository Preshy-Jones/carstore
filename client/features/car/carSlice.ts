import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Car } from "../../types/car";
import carService from "./carService";

export interface CarState {
  car: Car | null;
  cars: Car[];
  isLoading: boolean;
}

const initialState: CarState = {
  car: null,
  cars: [],
  isLoading: true,
};

export const getCars = createAsyncThunk(
  "cart/getCars",
  async (name, thunkAPI) => {
    try {
      return await carService.fetchCars();
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
        state.cars = action.payload.cars;
      })
      .addCase(getCars.rejected, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

// export const {} = carSlice.actions;

export default carSlice.reducer;
