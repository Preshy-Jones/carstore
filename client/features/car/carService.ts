import client from "../../api/client";
import { ENDPOINTS } from "../../utils/constants";

export const fetchCars = async () => {
  const response = await client().get(ENDPOINTS.GETCARS);
  console.log(response);

  return response.data;
};

const blogService = {
  fetchCars,
};

export default blogService;
