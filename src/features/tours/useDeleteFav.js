import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteFromFavs } from "../../services/apiFavoutires";

import { toast } from "react-hot-toast";

export function useDeleteFavs() {
  const queryClient = useQueryClient();

  const { mutate: deleteFav, isLoading: isDeleting } = useMutation({
    mutationFn: deleteFromFavs,
    onSuccess: () => {
      toast.success("Tour Deleted from Favourites");
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteFav };
}
