import { FormEvent, useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "@/components/Layouts";
import Metadata from "@/components/Metadata";
import { PasswordInput, TextInput } from "@/components/Inputs";
import { PrimaryButton } from "@/components/Buttons";
import { APP_NAME } from "@/config";
import { useAuth } from "@/hook";
import { InputChange } from "@/utils/types/generics";
import isAuthenticated from "@/utils/authentication";
import { ssrRedirects } from "@/utils/routes";
import { Page } from "@/utils/types";
import { loadingAuth, login, LoginProps } from "@/actions/auth";
import { Banner, LoginContainer, LoginForm } from "@/styles/Auth.styles";
import useAlerts from "@/hook/useAlerts";
import Image from "next/image";
import Link from "next/link";

const init: LoginProps = {
  email: "",
  password: "",
};
type Props = Page;
function LoginPage({ meta }: Props) {
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
    console.log(res)
    if (!res?.payload)
      return create({ type: "error", message: "Error al iniciar sesion." });
    return router.push(`/home`);
  };

  const isDisabled = useMemo(
    () => !_inputs.email || !_inputs.password,
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
            <h2>Iniciar sesion</h2>
            <div className="inputs">
              <TextInput
                label="email"
                name="email"
                placeholder="example@test.com"
                type="email"
                onChange={_onChange}
                value={_inputs.email}
                autoFocus
              />

              <PasswordInput
                label="contraseña"
                name="password"
                placeholder="Contraseña"
                autoComplete="off"
                onChange={_onChange}
                value={_inputs.password}
              />
            </div>

            <PrimaryButton disabled={isDisabled} type="submit">
              Iniciar sesion
            </PrimaryButton>
          </LoginForm>
          {/* <div className="bottom">
            <Link href="/auth/recovery">Recuperar cuenta</Link>
            <span className="divider">O</span>
            <Link href="/auth/enable">Habilitar cuenta</Link>
          </div> */}
        </div>
      </LoginContainer>
    </Layout>
  );
}

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (isAuthenticated(ctx)) return ssrRedirects.home;

  const props: Props = {
    email: null,
    meta: {
      title: `Iniciar sesión | ${APP_NAME}`,
      description: `Inicia sesion con tu cuenta y accede a nuestra pagina de tickets`,
    },
  };
  return { props };
};

/*
<a href="https://www.freepik.com/free-vector/server-concept-illustration_5357389.htm#query=it%20support&position=48&from_view=search&track=ais">Image by storyset</a> on Freepik
 */
