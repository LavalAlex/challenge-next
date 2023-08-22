import {
  API_USER_CREATE_TICKET,
  API_USER_GET_STATISTICS,
  API_USER_GET_SUPPORTS,
  API_USER_UPDATE_TICKET,
} from "@/config";
import { Api } from "@/utils/axios";
import { TicketModel, UserModel } from "@/utils/types/models";

import ActionSales from "../action";

export interface CreateTicket {
  title: string;
  description: string;
  category: TicketModel["category"];
  priority: TicketModel["priority"];
  files: File[];
  createdBy: string;
  assigned: string;
}
export async function createTicket(token: string, props: FormData) {
  try {
    const { data } = await Api({
      url: `${API_USER_CREATE_TICKET}`,
      method: `POST`,
      data: props,
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e: any) {
    return null;
  }
}

export async function getStatistics(token: string, email: string) {
  try {
    const { data } = await Api({
      url: `${API_USER_GET_STATISTICS}/${email}`,
      method: `GET`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e: any) {
    console.debug(e);
    return null;
  }
}

export interface UpdateStatus {
  email: string;
  status: TicketModel["status"];
  comment: string;
  id: TicketModel["id"];
}
export async function updateTicketStatus(token: string, _data: UpdateStatus) {
  try {
    const { data } = await Api({
      url: `${API_USER_UPDATE_TICKET}`,
      method: "PUT",
      data: _data,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.debug(data);
    return true;
  } catch (e: any) {
    console.debug(e.response.data);
    return false;
  }
}

export async function getSupports(token: string, email: string) {
  try {
    const { data } = await Api<UserModel[]>({
      url: `${API_USER_GET_SUPPORTS}`,
      method: "GET",
      params: { email, role: "support" },
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e: any) {
    console.debug(e.response.data);
    return null;
  }
}
export default {
  createTicket,
  updateTicketStatus,
  getSupports,
  getStatistics,
  ActionSales,
};
