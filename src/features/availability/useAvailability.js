import { useQuery } from "@tanstack/react-query";
import { getTourAvailability } from "../../services/apiTours";

export function useAvailability() {
  const { isLoading: isLoadin, data: availability } = useQuery({
    queryKey: ["availability"],
    queryFn: getTourAvailability,
  });

  return { isLoadin, availability };
}
