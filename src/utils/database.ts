import { z } from "zod";
import { TodoList, TodoListItem } from "~shared/types.ts";
import { DENO_KV_CONNECT_URL } from "~utils/costants.ts";

export const db = await Deno.openKv(DENO_KV_CONNECT_URL);

export const inputSchema = z.array(z.object({ id: z.string(), text: z.string(), completed: z.boolean() }));

export type InputSchema = z.infer<typeof inputSchema>;

export async function getItems(id: string, consistency: "strong" | "eventual"): Promise<TodoList> {
  const out: TodoList = { items: [] };
  const it = db.list({ prefix: [id] }, { reverse: true, consistency });
  for await (const entry of it) {
    const item = entry.value as TodoListItem;
    item.id = entry.key[entry.key.length - 1] as string;
    item.versionstamp = entry.versionstamp!;
    out.items.push(item);
  }
  return out;
}

export async function putItems(name: string, inputs: InputSchema): Promise<void> {
  const currentEntries = await db.getMany(inputs.map((input) => [name, input.id]));
  const op = db.atomic();
  inputs.forEach((input, i) => {
    if (input.text === null) {
      op.delete([name, input.id]);
    } else {
      const current = currentEntries[i].value as TodoListItem | null;
      const now = Date.now();
      const createdAt = current?.createdAt ?? now;
      const item: TodoListItem = { text: input.text, completed: input.completed, createdAt, updatedAt: now };
      op.set([name, input.id], item);
    }
  });
  await op.commit();
}
