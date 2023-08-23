import { UserProvider } from "@/context";
import { MetadataProps } from "@/utils/types";

import Layout from "../Layouts";
import Metadata from "../Metadata";
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
