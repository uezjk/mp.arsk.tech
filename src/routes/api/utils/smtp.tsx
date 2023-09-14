import { HandlerContext } from "$fresh/server.ts";
import { render } from "preact-render-to-string";
import MailMessage from "~/islands/MailMessage.tsx";
import { useSMTPClient } from "~/utils/helpers.ts";

export const handler = (_req: Request, _ctx: HandlerContext) => {
  try {
    const html = render(<MailMessage title="来自远方的问候" />);
    const smtp = useSMTPClient();
    smtp.send({ from: "auto@arsk.net", to: "leadfast@qq.com", subject:"来自远方的问候", html }).then(() => {
      console.log("DONE");
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      smtp.close();
    });
  } catch (error) {
    console.log(error);
  }

  return new Response("DONE");
};
