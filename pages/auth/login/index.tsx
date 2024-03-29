import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layouts";

import { PasswordInput, TextInput } from "@/components/Inputs";
import { PrimaryButton } from "@/components/Buttons";

import { useAuth } from "@/hook";
import { InputChange } from "@/utils/types/generics";
import { AUTH_ACTIONS, login, LoginProps } from "@/actions/auth";
import { Banner, LoginContainer, LoginForm } from "@/styles/Auth.styles";
import useAlerts from "@/hook/useAlerts";
import Image from "next/image";
import Link from "next/link";

const init: LoginProps = {
  email: "",
  password: "",
};

function LoginPage() {
  const router = useRouter();
  const { create } = useAlerts();
  const { dispatch } = useAuth();
  const [_inputs, _setInputs] = useState<LoginProps>(init);

  const _onChange = ({ target: { name, value } }: InputChange) => {
    _setInputs((old) => ({ ...old, [name]: value }));
  };

  const _onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await dispatch(login(_inputs));
    if (res?.type === AUTH_ACTIONS.ERROR) {
      const error = res.payload as unknown as string;
      return create({ type: "error", message: error });
    } else {
      return router.push(`/home`);
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
            <h2>Login</h2>
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
              Login
            </PrimaryButton>
          </LoginForm>
          <div className="bottom">
            <Link href="/auth/signup">Create Account</Link>
          </div>
        </div>
      </LoginContainer>
    </Layout>
  );
}

export default LoginPage;
