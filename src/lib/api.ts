import api from "./../app/api.json";

export const getCompanyById = (id: number) => {
  return api.company[id];
};

export const getProducts = () => {
  return api.company;
};
