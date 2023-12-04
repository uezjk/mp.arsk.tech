import { PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import { GTAG_ID } from "~utils/costants.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
        <link rel="stylesheet" href={asset("/style.css")} />
        <title></title>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); gtag('config', '${GTAG_ID}');`,
          }}
        />
      </head>
      <body class="antialiased">
        <Component />
      </body>
    </html>
  );
}
