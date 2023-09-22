export const JsonResponse = (body: unknown, init?: ResponseInit) => {
  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
};

export function generateItemId(): string {
  return `${Date.now()}-${crypto.randomUUID()}`;
}
