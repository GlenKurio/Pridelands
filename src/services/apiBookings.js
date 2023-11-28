import supabase from "./supabase";

export async function placeBooking({ ...orderDetails }) {
  const { data, error } = await supabase
    .from("bookings")
    .insert({ ...orderDetails })
    .select();
  if (error) console.log(error.message);

  return { data, error };
}
