import { SMTPClient } from "denomailer";

export const JsonResponse = (body: unknown, init?: ResponseInit) => {
  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
};

export const useSMTPClient = () => {
  const hostname = Deno.env.get("SMTP_HOST") as string;
  const username = Deno.env.get("SMTP_USER") as string;
  const password = Deno.env.get("SMTP_PASS") as string;
  const port = Deno.env.get("SMTP_PORT") as string;

  return new SMTPClient({
    connection: {
      hostname,
      port: Number(port),
      tls: true,
      auth: { username, password },
    },
  });
};
