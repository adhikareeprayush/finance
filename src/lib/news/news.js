import axiosInstance from "../../axios/axiosInstance";

export const getNews = async () => {
  try {
    const response = await axiosInstance.get("/news");
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
