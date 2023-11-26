import supabase from "./supabase";

export async function addToFavs(tour) {
  const { data: user, error: curuserErr } = await supabase.auth.getUser();
  if (curuserErr) console.log(error.message);
  const { data, error } = await supabase
    .from("favourites")
    .insert({ user: user.user.id, tour: tour })
    .select();

  if (error) console.log(error.message);

  return data;
}

export async function deleteFromFavs(tour) {
  const { data: user, error: curuserErr } = await supabase.auth.getUser();
  if (curuserErr) console.log(error.message);
  const { error } = await supabase.from("favourites").delete().eq("tour", tour);

  if (error) console.log(error.message);
}
