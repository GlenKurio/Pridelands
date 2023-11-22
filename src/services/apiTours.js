import supabase from "./supabase";

export async function getTours() {
  let { data: tours, error } = await supabase.from("tours").select("*");
  if (error) console.log(error.message);
  return tours;
}
export async function getTourImages(id) {
  let { data: tourImgs, error } = await supabase
    .from("tour_gallery")
    .select("*")
    .eq("tour_id", id);
  if (error) console.log(error.message);
  return tourImgs;
}

export async function getTourAvailability(id) {
  let { data: availability, error } = await supabase
    .from("availability")
    .select("*")
    .eq("tour_id", id);
  if (error) console.log(error.message);

  return availability;
}
