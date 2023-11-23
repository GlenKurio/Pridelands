import supabase from "./supabase";

export async function addUser({ firstName, lastName, email, phone }) {
  const { error } = await supabase
    .from("users")
    .insert({ firstName, lastName, email, phone })
    .select();
  if (error) console.log(error.message);
}

export async function getUserData(email) {
  let { data: userData, error } = await supabase
    .from("users")
    .select(
      `*, stories(
        content, 
        heading, 
        rating, 
        tours (*)), bookings(*)`
    )
    .eq("email", email);
  if (error) console.log(error.message);

  return userData;
}
