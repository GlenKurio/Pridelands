import supabase from "./supabase";
import { toast } from "react-hot-toast";

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

export async function updateUserAuth({ password, email }) {
  const updates = {};

  if (password) updates.password = password;
  if (email) updates.email = email;
  if (password && !email) toast.success("Password successfully updated");
  if (!password && email) toast.success("Email successfully updated");
  if (password && email)
    toast.success("Password and Email successfully updated");

  const { data, error } = await supabase.auth.updateUser(updates);
  if (error) throw new Error(error.message);

  return { data };
}
