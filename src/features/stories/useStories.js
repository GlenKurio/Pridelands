import { getStories } from "../../services/apiStories";
import { useQuery } from "@tanstack/react-query";

export function useStories() {
  const {
    isLoading,
    data: stories,
    error,
  } = useQuery({
    queryKey: "stories",
    queryFn: getStories,
  });

  return { isLoading, stories, error };
}
