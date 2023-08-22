import { API_SUPPORT_GET_TICKET, API_SUPPORT_UPDATE_TICKET } from "@/config";
import { Api } from "@/utils/axios";
import { TicketModel } from "@/utils/types/models";
import { TicketsQuery } from "./user";

export enum SUPPORT_ACTIONS {
  GET_TICKETS = "SUPPORT_GET_TICKETS",
  LOADING_TICKETS = "SUPPORT_LOADING_TICKETS",
  ERROR = "SUPPORT_ERROR",
}

export async function getTickets(
  token: string,
  email: string,
  from: number = 0,
  to: number = 10,
  q?: TicketsQuery
) {
  try {
    const { data } = await Api({
      url: `${API_SUPPORT_GET_TICKET}`,
      method: `GET`,
      params: { email, from, to, ...q },
      headers: { Authorization: `Bearer ${token}` },
    });
    return { type: SUPPORT_ACTIONS.GET_TICKETS, payload: data };
  } catch (e: any) {
    console.debug(e.reponse);
    return { type: SUPPORT_ACTIONS.ERROR, payload: [] };
  }
}

interface UpdateStatus {
  email: string;
  status: TicketModel["status"];
  comment: string;
  id: TicketModel["id"];
}
export async function updateStatus(token: string, _data: UpdateStatus) {
  try {
    const { data } = await Api({
      url: `${API_SUPPORT_UPDATE_TICKET}`,
      method: `PUT`,
      data: _data,
      headers: { Authorization: `Bearer ${token}` },
    });
    return { type: SUPPORT_ACTIONS.GET_TICKETS, payload: data };
  } catch (e) {
    return { type: SUPPORT_ACTIONS.ERROR, payload: [] };
  }
}
