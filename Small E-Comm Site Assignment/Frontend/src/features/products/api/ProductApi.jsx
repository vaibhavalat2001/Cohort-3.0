import api from "../../../config/api";

export const getProduct = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.log("error while fetching products");
    throw error;
  }
};
