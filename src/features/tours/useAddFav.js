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
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, saveToFavs };
}
