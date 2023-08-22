export type Event =
  | "updating"
  | "updated"
  | "created"
  | "deleted"
  | "loading"
  | "cancelled";
export type OnEvent = (e: Event) => any;
