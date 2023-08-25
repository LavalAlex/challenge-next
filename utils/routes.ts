import { GetServerSidePropsResult } from "next";

const routes = {
  _404: "/404",
  landing: "/",
  home: "/home",
  login: "/auth/login",
  signup: "/auth/signup",
};

export default routes;

interface SSRRedirects {
  [key: string]: GetServerSidePropsResult<{ [key: string]: any }>;
}
export const ssrRedirects: SSRRedirects = {
  _404: { notFound: true },
  landing: { redirect: { destination: routes.landing, permanent: false } },
  home: { redirect: { destination: routes.home, permanent: false } },
  login: { redirect: { destination: routes.login, permanent: false } },
  signup: { redirect: { destination: routes.signup, permanent: false } },
};
