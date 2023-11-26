import { useQuery } from "@tanstack/react-query";
import { getUserFavs } from "../../services/apiUsers";

export function useFavs() {
  const { isLoading, data: userFavs } = useQuery({
    queryKey: ["favourites"],
    queryFn: getUserFavs,
  });

  return { isLoading, userFavs };
}
