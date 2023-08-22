import { API_ACTION_GET_TICKETS } from "@/config";
import { Api } from "@/utils/axios";
import { ActionTicket } from "@/utils/types/models";

async function getTickets(token: string, email: string) {
  try {
    const { data } = await Api.get<ActionTicket[]>(
      `${API_ACTION_GET_TICKETS}/${email}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.debug("axios: ", data);
    return { data: data, error: null };
  } catch (e: any) {
    return { data: null, error: null };
  }
}
const ActionService = {
  getTickets,
};

export default ActionService;
