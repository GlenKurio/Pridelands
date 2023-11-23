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

export async function signUp({ firstName, lastName, email, phone, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    otions: {
      data: {
        firstName,
        lastName,
        phone,
        avatar: "",
      },
      emailRedirectTo: "http://localhost:5173/account",
    },
  });

  if (error) throw new Error(error.message);

  return data;
}
