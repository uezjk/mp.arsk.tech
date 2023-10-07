export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: { id: number; uid: string; nick: string | null; avatar: string | null };
        Insert: { id?: never; uid: string; nick?: string | null; avatar?: string | null };
        Update: { id?: never; uid: string; nick?: string | null; avatar?: string | null };
      };
    };
  };
}
