import { API_SUPPORT_GET_ACTION_TICKETS } from "@/config";
import { Api } from "@/utils/axios";

interface Res {
  data: null;
  error: { code: string; message: string } | null;
}
export async function getTickets(token: string, email: string): Promise<Res> {
  try {
    const res = await Api.get(`${API_SUPPORT_GET_ACTION_TICKETS}/${email}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { data: res.data, error: null };
  } catch (e: any) {
    if (e.response?.data) {
      return {
        data: null,
        error: {
          code: e.response.status === 403 ? "unauthorized" : e.response.code,
          message: e.response.data.message,
        },
      };
    }

    return {
      data: null,
      error: {
        code: e.code,
        message: e.message,
      },
    };
  }
}

export default {
  getTickets,
};
