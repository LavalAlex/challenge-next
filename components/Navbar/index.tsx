import { useRouter } from "next/router";
import Avatar, { AvatarPlaceholder } from "../Avatar";
import { useAuth } from "@/hook";
import routes from "@/utils/routes";

import { logout } from "@/actions/auth";

import {
  NavbarContainer,
  NavbarLeft,
  NavbarMiddle,
  NavbarRight,
} from "./styles";
import Logo from "../Logo";

function Navbar() {
  const router = useRouter();
  const { store, dispatch } = useAuth();

  const _logout = () => {
    dispatch(logout());
    router.push(routes.login);
  };

  return (
    <NavbarContainer>
      <NavbarLeft>
        <Logo theme="dark" />
      </NavbarLeft>

      <NavbarMiddle />

      <NavbarRight as="nav">
        {store.isLoading ? (
          <AvatarPlaceholder />
        ) : store.data ? (
          <Avatar onClick={_logout} data={store.data} />
        ) : null}
      </NavbarRight>
    </NavbarContainer>
  );
}

export default Navbar;
