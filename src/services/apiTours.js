import supabase, { supabaseUrl } from "./supabase";

export async function getTours() {
  let { data: tours, error } = await supabase.from("tours").select("*");
  if (error) console.log(error.message);
  return tours;
}
