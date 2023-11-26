import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateUserAuth } from "../../services/apiAuth";

export function useUpdateUserAuth() {
  const queryClient = useQueryClient();

  const { mutate: updateAuthUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserAuth,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateAuthUser, isUpdating };
}
