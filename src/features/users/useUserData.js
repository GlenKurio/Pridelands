import { useQuery } from "@tanstack/react-query";

import { getUserData as userDataApi } from "../../services/apiUsers";

export function useUserData() {
  const { isLoading, data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: userDataApi,
  });

  return { isLoading, userData };
}
