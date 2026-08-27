import { useQuery } from "@tanstack/react-query";
import { productApi } from "../api/productApi";

export const useProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => productApi(pageParam),
    initialPageParam: 2,
  });
  return {
    data,
    isLoading,
    error,
  };
};
