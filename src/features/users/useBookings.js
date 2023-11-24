import { useQuery } from "@tanstack/react-query";
import { getUserBookings as bookingsApi } from "../../services/apiUsers";
export function useBookings() {
  const { isLoading, data: bookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: bookingsApi,
  });

  return { isLoading, bookings };
}
