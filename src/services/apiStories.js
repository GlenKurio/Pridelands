import supabase from "./supabase";

export async function getStories() {
  let { data: stories, error } = await supabase.from("stories").select("*");
  if (error) console.log(error.message);
  return stories;
}

export async function getTourStories(id) {
  let { data: tourStories, error } = await supabase
    .from("stories")
    .select(
      `*, users (
      firstName,
      lastName, avatar
    )`
    )
    .eq("tour_id", id);
  if (error) console.log(error.message);
  return tourStories;
}
