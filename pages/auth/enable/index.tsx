import { GetServerSideProps } from "next";
import { FormEvent, useMemo, useState } from "react";

import Layout from "@/components/Layouts";
import Metadata from "@/components/Metadata";
import { APP_NAME } from "@/config";
import isAuthenticated from "@/utils/authentication";
import { ssrRedirects } from "@/utils/routes";
import { Page } from "@/utils/types";
import { InputChange } from "@/utils/types/generics";

import { Banner, LoginContainer, LoginForm } from "@/styles/Auth.styles";
import { PrimaryButton } from "@/components/Buttons";
import { PasswordInput, TextInput } from "@/components/Inputs";
import { useAuth } from "@/hook";
import { enable, EnableProps } from "@/actions/auth";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const init: EnableProps = {
  email: "",
  code: "",
  password: "",
};

type Props = Page;
function EnablePage({ meta }: Props) {
  const { dispatch } = useAuth();
  const [_inputs, _setInputs] = useState<EnableProps>(init);
  const router = useRouter();

  const _onChange = ({ target: { name, value } }: InputChange) =>
    _setInputs((old) => ({ ...old, [name]: value }));

  const _onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(enable(_inputs));
    router.push("/auth/login");
  };

  const isDisabled = useMemo(
    () => !_inputs.email || !_inputs.password || !_inputs.code,
    [_inputs]
  );

  return (
    <Layout>
      <Metadata {...meta} />

      <LoginContainer>
        <div className="left">
          <Image
            className="img"
            src={"/assets/images/support.jpeg"}
            alt=""
            fill
          />
        </div>
        <div className="right">
          <Banner>
            <Image
              className="img"
              src={"/assets/images/sistems-sg.jpeg"}
              alt=""
              fill
            />
          </Banner>

          <LoginForm onSubmit={_onSubmit}>
            <div className="inputs">
              <TextInput
                label="email"
                name="email"
                type="email"
                placeholder="example@test.com"
                value={_inputs.email}
                onChange={_onChange}
                autoFocus
              />

              <PasswordInput
                label="contraseña"
                name="password"
                placeholder="Contraseña"
                autoComplete="off"
                value={_inputs.password}
                onChange={_onChange}
              />

              {_inputs.email && _inputs.password && (
                <TextInput
                  label="codigo"
                  name="code"
                  placeholder="ABC123"
                  onChange={_onChange}
                  value={_inputs.code}
                />
              )}
            </div>

            <PrimaryButton disabled={isDisabled} type="submit">
              Habilitar cuenta
            </PrimaryButton>
          </LoginForm>

          <div className="bottom">
            <Link href="/auth/login">Iniciar sesion</Link>
            <span className="divider">O</span>
            <Link href="/auth/recovery">Recuperar cuenta</Link>
          </div>
        </div>
      </LoginContainer>
    </Layout>
  );
}

export default EnablePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (isAuthenticated(ctx)) return ssrRedirects.home;

  const props: Props = {
    data: null,
    meta: {
      title: `Habilitar cuenta | ${APP_NAME}`,
      description: `Habilita tu cuenta para poder acceder a todas las funcionalidades.`,
    },
  };
  return { props };
};
