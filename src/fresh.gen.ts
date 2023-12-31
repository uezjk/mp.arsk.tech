// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_middleware from "./routes/api/_middleware.ts";
import * as $api_auth_index from "./routes/api/auth/index.ts";
import * as $api_auth_sign_in from "./routes/api/auth/sign-in.ts";
import * as $api_auth_sign_up from "./routes/api/auth/sign-up.ts";
import * as $api_example from "./routes/api/example.ts";
import * as $api_profile_middleware from "./routes/api/profile/_middleware.ts";
import * as $api_profile_index from "./routes/api/profile/index.ts";
import * as $api_users_uid_ from "./routes/api/users/[uid].ts";
import * as $api_users_index from "./routes/api/users/index.ts";
import * as $api_utils_invite_code from "./routes/api/utils/invite-code.ts";
import * as $api_utm_url_index from "./routes/api/utm-url/index.ts";
import * as $blog_slug_ from "./routes/blog/[slug].tsx";
import * as $gfm_css from "./routes/gfm.css.ts";
import * as $index from "./routes/index.tsx";
import * as $x_broadcast_id_ from "./routes/x/broadcast/[id].tsx";
import * as $x_broadcast_layout from "./routes/x/broadcast/_layout.tsx";
import * as $x_broadcast_index from "./routes/x/broadcast/index.tsx";
import * as $x_carousel from "./routes/x/carousel.tsx";
import * as $x_oauth_provider_ from "./routes/x/oauth/[provider].tsx";
import * as $x_oauth_validate from "./routes/x/oauth/validate.tsx";
import * as $x_privacy from "./routes/x/privacy.tsx";
import * as $x_profile from "./routes/x/profile.tsx";
import * as $x_sign_in from "./routes/x/sign-in.tsx";
import * as $x_sign_up from "./routes/x/sign-up.tsx";
import * as $x_utm_url from "./routes/x/utm-url.tsx";
import * as $ProfileBody from "./islands/ProfileBody.tsx";
import * as $SimpleCarousel from "./islands/SimpleCarousel.tsx";
import * as $UtmUrlForm from "./islands/UtmUrlForm.tsx";
import * as $Welcome from "./islands/Welcome.tsx";
import * as $auth_SignInForm from "./islands/auth/SignInForm.tsx";
import * as $auth_SignUpForm from "./islands/auth/SignUpForm.tsx";
import * as $auth_Validation from "./islands/auth/Validation.tsx";
import * as $ext_UserHead from "./islands/ext/UserHead.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/_middleware.ts": $api_middleware,
    "./routes/api/auth/index.ts": $api_auth_index,
    "./routes/api/auth/sign-in.ts": $api_auth_sign_in,
    "./routes/api/auth/sign-up.ts": $api_auth_sign_up,
    "./routes/api/example.ts": $api_example,
    "./routes/api/profile/_middleware.ts": $api_profile_middleware,
    "./routes/api/profile/index.ts": $api_profile_index,
    "./routes/api/users/[uid].ts": $api_users_uid_,
    "./routes/api/users/index.ts": $api_users_index,
    "./routes/api/utils/invite-code.ts": $api_utils_invite_code,
    "./routes/api/utm-url/index.ts": $api_utm_url_index,
    "./routes/blog/[slug].tsx": $blog_slug_,
    "./routes/gfm.css.ts": $gfm_css,
    "./routes/index.tsx": $index,
    "./routes/x/broadcast/[id].tsx": $x_broadcast_id_,
    "./routes/x/broadcast/_layout.tsx": $x_broadcast_layout,
    "./routes/x/broadcast/index.tsx": $x_broadcast_index,
    "./routes/x/carousel.tsx": $x_carousel,
    "./routes/x/oauth/[provider].tsx": $x_oauth_provider_,
    "./routes/x/oauth/validate.tsx": $x_oauth_validate,
    "./routes/x/privacy.tsx": $x_privacy,
    "./routes/x/profile.tsx": $x_profile,
    "./routes/x/sign-in.tsx": $x_sign_in,
    "./routes/x/sign-up.tsx": $x_sign_up,
    "./routes/x/utm-url.tsx": $x_utm_url,
  },
  islands: {
    "./islands/ProfileBody.tsx": $ProfileBody,
    "./islands/SimpleCarousel.tsx": $SimpleCarousel,
    "./islands/UtmUrlForm.tsx": $UtmUrlForm,
    "./islands/Welcome.tsx": $Welcome,
    "./islands/auth/SignInForm.tsx": $auth_SignInForm,
    "./islands/auth/SignUpForm.tsx": $auth_SignUpForm,
    "./islands/auth/Validation.tsx": $auth_Validation,
    "./islands/ext/UserHead.tsx": $ext_UserHead,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
