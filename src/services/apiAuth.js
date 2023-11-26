import supabase from "./supabase";

export async function logInWithPassword({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return { data, error };
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function signUp({ email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    otions: {
      emailRedirectTo: "http://localhost:5173/account",
    },
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function updateUserAuth({ password, firstName, lastName }) {
  let updateData;
  if (password) updateData = { password };
  if (firstName) updateData = { data: { firstName } };
  if (lastName) updateData = { data: { lastName } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  return { data };
}
