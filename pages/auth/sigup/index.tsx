import { FormEvent, useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "@/components/Layouts";
import { PasswordInput, TextInput } from "@/components/Inputs";
import { PrimaryButton } from "@/components/Buttons";

import { useAuth } from "@/hook";
import { InputChange } from "@/utils/types/generics";
import isAuthenticated from "@/utils/authentication";
import { ssrRedirects } from "@/utils/routes";
import { Page } from "@/utils/types";
import { AUTH_ACTIONS, LoginProps, sigup } from "@/actions/auth";
import { Banner, LoginContainer, LoginForm } from "@/styles/Auth.styles";
import useAlerts from "@/hook/useAlerts";
import Image from "next/image";
import Link from "next/link";

const init: LoginProps = {
  email: "",
  password: "",
};

type Props = Page<{ email: string | null }>;
function SigupPage({}: Props) {
  const router = useRouter();
  const { create } = useAlerts();
  const { dispatch } = useAuth();
  const [_inputs, _setInputs] = useState<LoginProps>(init);

  const _onChange = ({ target: { name, value } }: InputChange) => {
    _setInputs((old) => ({ ...old, [name]: value }));
  };

  const _onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await dispatch(sigup(_inputs));

    if (res?.type === AUTH_ACTIONS.ERROR)
      return create({ type: "error", message: res.payload.error });
    else {
      create({ type: "success", message: "Account created success." });
      return router.push(`/auth/login`);
    }
  };

  const isDisabled = useMemo(
    () => !_inputs.email || !_inputs.password,
    [_inputs]
  );

  return (
    <Layout>
      <LoginContainer>
        <div className="left">
          <Image
            className="img"
            src={"https://www.4agiledev.com/about.png"}
            alt=""
            fill
          />
        </div>
        <div className="right">
          <Banner>
            <Image
              className="img"
              src={"https://www.4agiledev.com/hero.png"}
              alt=""
              fill
            />
          </Banner>

          <LoginForm onSubmit={_onSubmit}>
            <h2>Register</h2>
            <div className="inputs">
              <TextInput
                label="Email"
                name="email"
                placeholder="example@test.com"
                type="email"
                onChange={_onChange}
                value={_inputs.email}
                autoFocus
              />

              <PasswordInput
                label="Password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                onChange={_onChange}
                value={_inputs.password}
              />
            </div>

            <PrimaryButton disabled={isDisabled} type="submit">
              Register
            </PrimaryButton>
            <div className="bottom">
              <Link href="/auth/login">Login Account</Link>
            </div>
          </LoginForm>
        </div>
      </LoginContainer>
    </Layout>
  );
}

export default SigupPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (isAuthenticated(ctx)) return ssrRedirects.home;

  const props: Props = {
    data: null,
  };
  return { props };
};
