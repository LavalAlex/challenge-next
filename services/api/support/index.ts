import {
  API_SUPPORT_GET_ACCOUNTS,
  API_SUPPORT_REASSIGN,
  API_SUPPORT_STATISTICS,
} from "@/config";
import { Api } from "@/utils/axios";
import { TicketModel, UserModel } from "@/utils/types/models";

import ActionSales from "./action";

async function getAccounts(token: string, email: string) {
  try {
    const { data } = await Api<UserModel[]>({
      url: `${API_SUPPORT_GET_ACCOUNTS}`,
      method: "GET",
      params: { email, role: "support" },
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (e: any) {
    return null;
  }
}

interface ReassignProps {
  id: TicketModel["id"];
  email: string;
  support: string;
  comment: string;
}
async function reassign(token: string, props: ReassignProps) {
  try {
    const { data } = await Api<UserModel[]>({
      url: `${API_SUPPORT_REASSIGN}`,
      method: "PUT",
      data: props,
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (e: any) {
    return null;
  }
}

async function getStatistics(token: string, email: string) {
  const { data } = await Api<UserModel[]>({
    url: `${API_SUPPORT_STATISTICS}/${email}`,
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}

const SupportService = {
  getAccounts,
  reassign,
  getStatistics,
  ActionSales,
};

export default SupportService;
