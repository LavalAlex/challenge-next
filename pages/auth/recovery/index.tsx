import { GetServerSideProps } from "next";
import { FormEvent, useMemo, useState } from "react";

import { PrimaryButton } from "@/components/Buttons";
import { TextInput } from "@/components/Inputs";
import Layout from "@/components/Layouts";
import Metadata from "@/components/Metadata";
import { APP_NAME } from "@/config";
import { Banner, LoginContainer, LoginForm } from "@/styles/Auth.styles";
import isAuthenticated from "@/utils/authentication";
import { ssrRedirects } from "@/utils/routes";
import { Page } from "@/utils/types";
import { InputChange } from "@/utils/types/generics";
import { useAlerts, useAuth } from "@/hook";
import { recovery, RecoveryProps } from "@/actions/auth";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const init: RecoveryProps = {
  email: "",
};

type Props = Page;
function RecoveryPage({ meta }: Props) {
  const router = useRouter();
  const { dispatch } = useAuth();
  const { create } = useAlerts();
  const [_inputs, _setInputs] = useState<RecoveryProps>(init);

  const _onChange = ({ target: { name, value } }: InputChange) =>
    _setInputs((old) => ({ ...old, [name]: value }));

  const _onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await dispatch(recovery(_inputs));
    if (!res?.payload)
      return create({
        type: "error",
        message: "Error al recuperar la cuenta.",
      });
    else return router.push("/auth/enable");
  };

  const isDisabled = useMemo(() => !_inputs.email, [_inputs]);

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
            <h2>Recuperar cuenta</h2>
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
            </div>

            <PrimaryButton disabled={isDisabled} type="submit">
              Recuperar cuenta
            </PrimaryButton>
          </LoginForm>

          <div className="bottom">
            <Link href="/auth/login">Iniciar sesion</Link>
            <span className="divider">O</span>
            <Link href="/auth/enable">Habilitar cuenta</Link>
          </div>
        </div>
      </LoginContainer>
    </Layout>
  );
}

export default RecoveryPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (isAuthenticated(ctx)) return ssrRedirects.home;

  const props: Props = {
    data: null,
    meta: {
      title: `Recuperar cuenta | ${APP_NAME}`,
      description: `Si olvidate tu cuenta ingresa tus datos y te ayudaremos a recuperarla.`,
    },
  };
  return { props };
};
