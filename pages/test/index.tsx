import { ActionTicketsList } from "@/components/ActionSale";
import Layout from "@/components/Layouts";
import Metadata from "@/components/Metadata";
import { APP_NAME } from "@/config";
import { useAuth } from "@/hook";
import ActionService from "@/services/api/action";
import { ssrRedirects } from "@/utils/routes";
import { Page } from "@/utils/types";
import { ActionTicket } from "@/utils/types/models";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

type Props = Page;
function TestPage({ meta }: Props) {
  const { store: auth } = useAuth();
  const [tickets, setTickets] = useState<ActionTicket[]>([]);

  useEffect(() => {
    const p = async () => {
      if (!auth.data) return;
      const { token, email } = auth.data;

      const res = await ActionService.getTickets(token, email);

      if (res.error) return null;
      if (!res.data) return null;
      return setTickets(res.data);
    };
    p();
  }, [auth]);

  return (
    <Layout>
      <Metadata {...meta} />
      <ActionTicketsList data={tickets} />
    </Layout>
  );
}

export default TestPage;

export const getServerSideProps: GetServerSideProps = async () => {
  if (process.env.NODE_ENV !== "development") return ssrRedirects._404;

  const props: Props = {
    data: null,
    meta: {
      title: `Pagina de pruebas | ${APP_NAME}`,
      description: `Esta pagina está disponible unicamente en entornos de prueba.`,
    },
  };
  return { props };
};
