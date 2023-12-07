import { createClient } from "@supabase/supabase-js";
import { Database } from "~shared/database.types.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_KEY");
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

// if (!supabaseUrl || !supabaseKey || !supabaseServiceRoleKey) {
//   throw new Error("Missing SUPABASE_URL, SUPABASE_KEY, or SUPABASE_SERVICE_ROLE_KEY");
// }

export const supabase = createClient<Database>(supabaseUrl, supabaseServiceRoleKey);

export const requestUser = async (request: Request) => {
  const token = request.headers.get("Authorization");
  if (!token) {
    throw new Error("Missing Authorization header");
  }
  const { error, data } = await supabase.auth.getUser(token.replace("Bearer ", ""));
  if (error) {
    throw new Error(error.message);
  }
  if (data.user === null) {
    throw new Error("Unauthorized");
  }
  return data.user;
};
