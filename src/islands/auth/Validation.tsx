import { useEffect, useState } from "preact/hooks";
import { auth } from "~utils/state/auth.ts";
import ajax from "~utils/ajax.ts";

export default function Validate() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const params = new URLSearchParams(currentUrl.hash.substring(1));
    if (params.get("access_token")) {
      setMessage("Redirecting...");
      const token = Object.fromEntries(params.entries());
      auth.save(JSON.stringify(token));
      ajax.json("/api/auth", token).then(() => {
        window.location.href = "/x/profile";
      });
    } else {
      setMessage("Missing access token");
    }
  }, []);

  return <div class="text-center p-4">{message}</div>;
}
