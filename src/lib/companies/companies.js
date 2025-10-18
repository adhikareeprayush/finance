import axiosInstance from "../../axios/axiosInstance";

export const getCompanies = async () => {
  try {
    const response = await axiosInstance.get("/companies");
    console.log("API Response:", response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCompanyBySymbol = async (symbol) => {
  try {
    const response = await axiosInstance.get(`/companies/${symbol}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCharts = async (symbol) => {
  try {
    const response = await axiosInstance.get(`/charts/${symbol}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
