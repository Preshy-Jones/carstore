export const getFullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
