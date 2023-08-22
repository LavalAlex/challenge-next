import { GetServerSideProps } from "next";

import isAuthenticated from "@/utils/authentication";
import { ssrRedirects } from "@/utils/routes";

interface Props {}
function Landing({}: Props) {
  return null;
}
export default Landing;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (!isAuthenticated(ctx)) return ssrRedirects.login;
  return ssrRedirects.home;
};
