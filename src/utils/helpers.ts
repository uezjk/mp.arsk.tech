export const JsonResponse = (body: unknown = {}, init?: ResponseInit) => {
  body = Object.assign({ error: null }, body);
  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
};

export function generateItemId(): string {
  return `${Date.now()}-${crypto.randomUUID()}`;
}

export function pick<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, key) => {
    // deno-lint-ignore no-prototype-builtins
    if (obj && obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as Pick<T, K>);
}
