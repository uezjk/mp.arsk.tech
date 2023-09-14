import qs from "qs";
import request from "./request.ts";

export type BoardcastResponse = { id: number; attributes: { title: string; views: string; publish: string; thumb: any } };

const options = { encode: false, encodeValuesOnly: true };

export const queryBroadcastView = async ({ id }: { id: string | number | undefined }): Promise<BoradcastView> => {
  const [ok, resp] = await request.get(`/broadcasts/${id}?populate=thumb`);
  if (!ok) return {} as BoradcastView;
  const { data } = resp;
  return { id, ...data.attributes };
};

export const queryBroadcasts = async (): Promise<BoardcastListItem[]> => {
  const query = qs.stringify({ populate: "thumb", sort: "publish:DESC", fields: ["title", "views", "publish"] }, options);
  const [ok, resp] = await request.get(`/broadcasts?${query}`);
  if (!ok) return [] as BoardcastListItem[];
  const { data } = resp;

  return data.map((el: BoardcastResponse) => ({
    title: el.attributes.title,
    views: el.attributes.views,
    publish: el.attributes.publish,
    thumb: el.attributes.thumb.data.attributes.url,
    id: el.id,
  }));
};
