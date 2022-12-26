export enum Links {
  LOGIN = "/login",
  REGISTER = "/register",
  DASHBOARD = "/dashboard",
}

export enum ENDPOINTS {
  GETCARS = "/",
}

export const getCars = (
  model: string,
  make: string,
  year: string,
  minPrice: number,
  maxPrice: number
) =>
  `/?model=${model}&make=${make}&year=${year}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
