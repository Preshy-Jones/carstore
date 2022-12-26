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

const blogService = {
  fetchCars,
};

export default blogService;
