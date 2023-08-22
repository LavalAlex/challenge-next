import CommentModel from "./CommentModel";
import ImageModel from "./ImageModel";
import UserModel from "./UserModel";

export type TicketStatus = "opened" | "solved" | "cloused" | "cancelled";
export type Priority = "low" | "high" | "medium";
export type TicketCategories = "developer" | "support" | "order";

type TUser = Omit<UserModel, "id" | "isActive">;
interface TicketModel {
  category: TicketCategories;
  comments: CommentModel[];
  createdDate: string;
  description: string;
  files: ImageModel[];
  id: string | number;
  images: ImageModel[];
  priority: Priority;
  status: TicketStatus;
  support: TUser;
  title: string;
  updateDate: string;
  user: TUser;
}

export default TicketModel;

export interface TicketsQuery {
  category?: TicketModel["category"];
  priority?: TicketModel["priority"];
  orderBy?: "desc" | "asc";
}
