import client from "../../api/client";
import { ENDPOINTS, getCars } from "../../utils/constants";

export const fetchCars = async (
  model: string,
  make: string,
  year: string,
  minPrice: number,
  maxPrice: number
) => {
  const response = await client().get(
    getCars(model, make, year, minPrice, maxPrice)
  );
  console.log(response);

  return response.data;
};

export const fetchModels = async () => {
  const response = await client().get(ENDPOINTS.GETMODELS);
  console.log(response);

  return response.data;
};

const carService = {
  fetchCars,
  fetchModels,
};

export default carService;
