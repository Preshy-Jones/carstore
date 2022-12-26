import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Car } from "../../types/car";
import carService from "./carService";

export interface CarState {
  car: Car | null;
  cars: Car[];
  filter: {
    model: string;
    make: string;
    year: string;
    minPrice: number;
    maxPrice: number;
  };

  isLoading: boolean;
}

const initialState: CarState = {
  car: null,
  cars: [],
  filter: {
    model: "",
    make: "",
    year: "",
    minPrice: 0,
    maxPrice: 0,
  },
  isLoading: true,
};

interface CarPayload {
  model: string;
  make: string;
  year: string;
  minPrice: number;
  maxPrice: number;
}

export const getCars = createAsyncThunk(
  "cart/getCars",
  async (payload: CarPayload, thunkAPI) => {
    const { model, make, year, minPrice, maxPrice } = payload;
    try {
      return await carService.fetchCars(model, make, year, minPrice, maxPrice);
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
