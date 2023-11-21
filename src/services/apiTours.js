import supabase, { supabaseUrl } from "./supabase";

export async function getTours() {
  let { data: tours, error } = await supabase.from("tours").select("*");
  if (error) console.log(error.message);
  return tours;
}
// export async function getTourImages(id) {
//   let { data: tourImgs, error } = await supabase
//     .from("tour_gallery")
//     .select("*")
//     .eq(id, "id");
//   if (error) console.log(error.message);
//   return tourImgs;
// }
