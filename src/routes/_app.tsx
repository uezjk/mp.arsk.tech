import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
        <title></title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SKXC6HGWKX" />
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-SKXC6HGWKX');`}} />
      </head>
      <body class="antialiased">
        <Component />
      </body>
    </html>
  );
}
