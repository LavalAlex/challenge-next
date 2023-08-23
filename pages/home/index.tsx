import User from "@/components/User";
import { APP_NAME, AUTH_COOKIE } from "@/config";
import isAuthenticated from "@/utils/authentication";
import { ssrRedirects } from "@/utils/routes";
import { Page } from "@/utils/types";
import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";

interface Data {
  email: string;
}


function UserHome() {

  return <User />;
}

export default UserHome;
