import supabase from "./supabase";

export async function adduser({ firstName, lastName, email, phone, password }) {
  const { error } = await supabase
    .from("users")
    .insert({ firstName, lastName, email, phone, password })
    .select();
  if (error) console.log(error.message);
}
