import { RouteContext } from "$fresh/server.ts";

interface GitHubResponse {
  login: string;
  name: string;
  avatar_url: string;
}

export default async function GithubUser(_req: Request, ctx: RouteContext) {
  const resp = await fetch(
    `https://api.github.com/users/${ctx.params.username}`,
  );

  if (!resp.ok) {
    return <h1>An Error occurred</h1>;
  }

  const { login, name, avatar_url } = (await resp.json()) as GitHubResponse;

  return (
    <div className="p-4 flex flex-col items-center">
      <img src={avatar_url} width={64} height={64} />
      <h1>{name}</h1>
      <p>{login}</p>
    </div>
  );
}
