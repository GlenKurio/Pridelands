import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addToFavs } from "../../services/apiFavoutires";

export function useAddToFavs() {
  const queryClient = useQueryClient();

  const { mutate: saveToFavs, isLoading: isAdding } = useMutation({
    mutationFn: addToFavs,
    onSuccess: () => {
      toast.success("Tour Saved to Your Favourites!");
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
    onError: () => toast.error("Need to login to save to davourites"),
  });

  return { isAdding, saveToFavs };
}
