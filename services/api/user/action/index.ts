import { API_USER_GET_ACTION_TICKETS } from "@/config";
import { Api } from "@/utils/axios";

interface Res {
  data: null;
  error: { code: string; message: string } | null;
}
export async function getTickets(token: string, email: string): Promise<Res> {
  try {
    const res = await Api.get(`${API_USER_GET_ACTION_TICKETS}/${email}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.debug(res);
    return { data: res.data, error: null };
  } catch (e: any) {
    return { data: null, error: null };
  }
}

export default { getTickets };
