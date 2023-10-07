import { supabase } from "~utils/supabase.ts";

export async function save({ url }: { url: string }) {
  const resp = await supabase.from("utm_urls").insert({ url });
  if (resp.error) {
    throw new Error(resp.error.message);
  }
  return resp.data;
}
