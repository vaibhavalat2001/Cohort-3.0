import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/ProductApi";
import { useState } from "react";

const useProducts = () => {
  const [showProductForm, setShowProductForm] = useState(false);

  const { data, isPending, error } = useQuery({
    queryKey: ["products", showProductForm],
    queryFn: getProduct,
    staleTime: 30000,
  });

  return { data, isPending, error, showProductForm, setShowProductForm };
};

export default useProducts;
