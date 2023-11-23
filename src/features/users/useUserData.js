import { getUserData as userDataApi } from "../../services/apiUsers";
import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "../../services/apiAuth";
async function getUserWithAllData() {
  try {
    const userAuth = await getCurrentUser();
    const userWithEverything = async (userAuth) => {
      const userAllData = await userDataApi(userAuth.email);

      return {
        ...userAuth,
        userData: userAllData,
      };
    };
    const dataAll = await Promise.all(userWithEverything);
    return dataAll;
  } catch (error) {
    throw new Error("failed to fetch eveyrhing you want");
  }
}

export async function useUserData() {
  const { isLoading, data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: getUserWithAllData,
  });

  return { isLoading, userData };
}
