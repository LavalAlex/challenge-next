import { useAuth } from "@/hook";
import SupportService from "@/services/api/support";
import { UserService } from "@/services/api/user";
import { UserModel } from "@/utils/types/models";
import { useEffect, useState } from "react";
import Selector from "react-select";

interface Data {
  isLoading: boolean;
  data: UserModel[];
}
const init: Data = {
  isLoading: true,
  data: [],
};

interface Props {
  className?: string;
  onChange?: (u: UserModel) => any;
}
function UserSelector({ className, onChange }: Props) {
  const { store: auth } = useAuth();
  const [_users, _setUsers] = useState<Data>(init);

  useEffect(() => {
    const p = async () => {
      if (!auth.data) return;

      _setUsers(init);
      const { token, email, role } = auth.data;
      let users: UserModel[] | null = null;
      if (role === "user") users = await UserService.getSupports(token, email);
      if (role === "support")
        users = await SupportService.getAccounts(token, email);
      _setUsers({ isLoading: false, data: users || [] });
    };
    p();
  }, []);

  return (
    <Selector
      className={className}
      onChange={(opt) => opt?.value && onChange?.(opt.value)}
      options={getOptions(
        _users.data.filter((u) => u.email !== auth.data?.email)
      )}
      isLoading={_users.isLoading}
    />
  );
}

export default UserSelector;

function getOptions(users: UserModel[]) {
  return users.map((u) => ({
    value: u,
    label: `${u.firstName} ${u.lastName}`,
  }));
}
