import { GetServerSidePropsContext } from "next";
import { getCookie } from "cookies-next";
import { AUTH_COOKIE } from "@/config";

function isAuthenticated(ctx: GetServerSidePropsContext): boolean {
  const cookie = getCookie(AUTH_COOKIE, { req: ctx.req, res: ctx.res });
  if (!cookie) return false;
  return true;
}

export default isAuthenticated;
