import { UserProvider } from "@/context";

import Layout from "../Layouts";
import UserHome from "./UserHome";

function User() {
  return (
    <Layout>
      <UserProvider>
        <UserHome />
      </UserProvider>
    </Layout>
  );
}

export default User;
