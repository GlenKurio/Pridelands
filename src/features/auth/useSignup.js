import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../services/apiUsers";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    // userData - comes from what signupApi() returns
    // variables - come from what we pass into signup() in Signup form component
    onSuccess: (userData, variables) => {
      const { id } = userData.user;
      const formData = variables;
      addUser({ ...formData, id });
      toast.success("Account Created Successfully!");
      navigate("/emailconfirm", { replace: true });
    },
  });

  return { signup, isLoading };
}
