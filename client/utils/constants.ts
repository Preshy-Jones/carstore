export enum Links {
  LOGIN = "/login",
  REGISTER = "/register",
  DASHBOARD = "/dashboard",
}

export enum ENDPOINTS {
  GETCARS = "/",
  GETMODELS = "/models",
}

export const getCars = (
  model: string,
  make: string,
  minYear: string,
  maxYear: string,
  minPrice: number,
  maxPrice: number
) =>
  `/?model=${model}&make=${make}&minYear=${minYear}&maxYear=${maxYear}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
