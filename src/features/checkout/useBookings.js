import { useMutation } from "@tanstack/react-query";
import { placeBooking as placeBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function usePlaceBooking() {
  const navigate = useNavigate();
  const { mutate: placeBooking, isLoading: isPlacing } = useMutation({
    mutationFn: placeBookingApi,
    onSuccess: () => {
      toast.success("Booking Placed Successfully!");
      navigate("/success", { replace: true });
    },
  });

  return { placeBooking, isPlacing };
}
