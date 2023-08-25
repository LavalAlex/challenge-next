import { UserProvider } from "@/context";

import Layout from "../Layouts";
import HomeUser from "./home";

function User() {
  return (
    <Layout>
      <UserProvider>
        <HomeUser />
      </UserProvider>
    </Layout>
  );
}

export default User;
