import { UserProvider } from "@/context";
import { MetadataProps } from "@/utils/types";

import Layout from "../Layouts";
import Metadata from "../Metadata";
import HomeUser from "./home";

interface UserProps {
  meta: MetadataProps;
}
function User({ meta }: UserProps) {
  return (
    <Layout>
      <Metadata {...meta} />
      <UserProvider>
        <HomeUser />
      </UserProvider>
    </Layout>
  );
}

export default User;
