declare global {
  type BaseModel = { id: number; createdAt: string; updatedAt: string; publishedAt: string };

  type BoradcastView = BaseModel & {
    title: string;
    content: string;
    views: string;
    publish: string;
    video: string;
    fulltext: string;
    author: string;
    thumb: string;
  };

  type BoardcastListItem = { title: string; views: string; publish: string; thumb: string; id: number };
}

export {};
