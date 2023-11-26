import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/avatars/avatar-placeholder.png?t=2023-11-24T17%3A09%3A09.384Z`;
export async function addUser({
  firstName,
  lastName,
  email,
  phone,
  id,
  avatar = imageUrl,
}) {
  const { error } = await supabase
    .from("users")
    .insert({ firstName, lastName, email, phone, id, avatar })
    .select();
  if (error) console.log(error.message);
}

export async function getUserData() {
  const { data: user, error: curuserErr } = await supabase.auth.getUser();
  if (curuserErr) console.log(error.message);

  let { data: userData, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.user.id);
  if (error) console.log(error.message);

  return userData;
}

export async function getUserFavs() {
  const { data: user, error: curuserErr } = await supabase.auth.getUser();
  if (curuserErr) console.log(error.message);
  let { data: userFavs, error } = await supabase
    .from("favourites")
    .select("*, tours(*)")
    .eq("user", user.user.id);
  if (error) console.log(error.message);

  return userFavs;
}

export async function getUserStories() {
  const { data: user, error: curuserErr } = await supabase.auth.getUser();
  if (curuserErr) console.log(error.message);
  let { data: userStories, error } = await supabase
    .from("stories")
    .select("*")
    .eq("user", user.user.id);
  if (error) console.log(error.message);

  return userStories;
}
export async function getUserBookings() {
  const { data: user, error: curuserErr } = await supabase.auth.getUser();
  if (curuserErr) console.log(error.message);
  let { data: userBookings, error } = await supabase
    .from("bookings")
    .select("*, tours(*)")
    .eq("user", user.user.id);
  if (error) console.log(error.message);
  console.log(userBookings);
  return userBookings;
}

export async function updateUserTable({ firstName, lastName, avatar }) {
  const { data: user, error: curuserErr } = await supabase.auth.getUser();
  if (curuserErr) throw new Error(curuserErr.message);

  const updates = {};

  if (firstName) updates.firstName = firstName;
  if (lastName) updates.lastName = lastName;

  if (avatar) {
    const fileName = `avatar-${user.user.id}-${Math.random()}`;
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(fileName, avatar);

    if (storageError) throw new Error(storageError.message);

    updates.avatar = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;
  }

  const { data: updatedUser, error: userUpdateError } = await supabase
    .from("users")
    .update(updates)
    .eq("id", user.user.id)
    .select();

  if (userUpdateError) throw new Error(userUpdateError.message);

  return updatedUser;
}
