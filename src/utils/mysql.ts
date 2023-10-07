import { Client } from "https://deno.land/x/mysql@v2.12.1/mod.ts";

const hostname = Deno.env.get("MYSQL_HOST") || "";
const username = Deno.env.get("MYSQL_USER") || "";
const password = Deno.env.get("MYSQL_PASS") || "";
const db = Deno.env.get("MYSQL_NAME") || "";
const port = parseInt(Deno.env.get("MYSQL_PORT") || "3306");

export const database = await new Client().connect({ hostname, username, password, db, port });

export function getUsers() {
  return database.query("SELECT * FROM users");
}
