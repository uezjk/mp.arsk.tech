import { supabase } from "~utils/supabase.ts";
import type { SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from "@supabase/supabase-js";

export async function signUp(code: string, credentials: SignUpWithPasswordCredentials) {
  const { error, data } = await supabase.from("invite_codes").select().eq("code", code).single();
  if (error || data === null) {
    throw new Error("Invalid invite code");
  }
  if (data.used_at !== null) {
    throw new Error("Invite code already used");
  }
  const resp = await supabase.auth.signUp(credentials);
  if (resp.error) {
    throw new Error(resp.error.message);
  }
  // User exists, but is fake. See https://supabase.com/docs/reference/javascript/auth-signup
  if (resp.data.user && resp.data.user.identities?.length === 0) {
    throw new Error("User already exists");
  }

  await supabase.from("profiles").insert({ uid: resp.data.user?.id });
  return resp.data;
}

export async function signIn(credentials: SignInWithPasswordCredentials) {
  const resp = await supabase.auth.signInWithPassword(credentials);
  if (resp.error) {
    throw new Error(resp.error.message);
  }

  const uid = resp.data.user.id;
  const profile = await supabase.from("profiles").select().eq("uid", uid).single();
  if (profile.data === null) {
    throw new Error("User not found");
  }
  return resp.data;
}
