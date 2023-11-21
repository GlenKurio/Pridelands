import { getTours } from "../../services/apiTours";
import { useQuery } from "@tanstack/react-query";

export function useTours() {
  const {
    isLoading,
    data: tours,
    error,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  return { isLoading, error, tours };
}
