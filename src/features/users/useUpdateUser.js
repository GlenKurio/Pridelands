import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateUserTable } from "../../services/apiUsers";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUserData, isLoading: isUpdatingData } = useMutation({
    mutationFn: updateUserTable,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["userData"], user);

      queryClient.invalidateQueries({ queryKey: ["userData"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUserData, isUpdatingData };
}
