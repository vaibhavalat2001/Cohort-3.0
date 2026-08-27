import { api } from "../../../config/api";

export const productApi = async (page) => {
  try {
    let res = await api.get("/products");
    console.log(page)
    return res.data.products
    
  } catch (error) {
    console.log("product api error:", error);
  }
};
