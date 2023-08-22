import User from "@/components/User";
import { APP_NAME, AUTH_COOKIE } from "@/config";
import isAuthenticated from "@/utils/authentication";
import { ssrRedirects } from "@/utils/routes";
import toSpanish from "@/utils/translations";
import { Page } from "@/utils/types";
import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";

interface Data {
  role: string;
}
type Props = Page<Data>;
function UserHome({ data, meta }: Props) {
  if (data.role === "user") return <User meta={meta} />;
  return null;
}

export default UserHome;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (!isAuthenticated(ctx)) return ssrRedirects.login;

  const cookie = getCookie(AUTH_COOKIE, { req: ctx.req, res: ctx.res });
  const session = cookie ? JSON.parse(cookie as string) : null;

  const props: Props = {
    data: { role: session?.role },
    meta: {
      title: `Inicio ${toSpanish(session?.role)} | ${APP_NAME}`,
      description: `Bienvenido al dashboard!`,
    },
  };

  return { props };
};
