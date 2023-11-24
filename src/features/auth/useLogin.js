import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logInWithPassword as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);

      toast.success(`Welcome!`);
      navigate(`/account/${user.user.id}`, { replace: true });
    },
    onError: (err) => {
      console.log("error", err);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}
