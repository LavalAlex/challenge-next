import { Api } from "@/utils/axios";
import { UserModel } from "@/utils/types/models";

async function getUsers(token: string) {
  try {
    const { data } = await Api<UserModel[]>({
      url: `/admin/account`,
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    return [];
  }
}

export default getUsers;
