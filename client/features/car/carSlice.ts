import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Car, CarModel } from "../../types/car";
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
  models: CarModel[];
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
  models: [],
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

export const getModels = createAsyncThunk(
  "cart/getModels",
  async (_, thunkAPI) => {
    try {
      return await carService.fetchModels();
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
        state.filter = action.payload.filter;
      })
      .addCase(getCars.rejected, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
      })
      .addCase(getModels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getModels.fulfilled, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
        state.models = action.payload.models;
      })
      .addCase(getModels.rejected, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

// export const {} = carSlice.actions;

export default carSlice.reducer;
