import { getUserData as userDataApi } from "../../services/apiUsers";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../auth/useUser";

export function useUserData() {
  const { user } = useUser();
  const { email } = user || {};

  const fetchUserData = async () => {
    if (email) {
      return userDataApi(email);
    }
    return null;
  };

  const { isLoading, data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: fetchUserData,
  });

  console.log(userData);
  return { isLoading, userData };
}
