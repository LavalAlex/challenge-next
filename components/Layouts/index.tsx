import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { BiErrorAlt, BiTrashAlt } from "react-icons/bi";
import { styled } from "styled-components";
import Navbar from "../Navbar";

import { Alerts } from "@/styles/Alerts.styles";
import useAlerts from "@/hook/useAlerts";
import config from "@/styles/config";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface Props {
  children?: ReactNode;
}
function Layout({ children }: Props) {
  const { alerts, deleteAlert } = useAlerts();
  return (
    <Container className={inter.className}>
      <Alerts>
        {alerts.map((a) => (
          // eslint-disable-next-line react/jsx-key
          <li
            role="button"
            className={`alert ${a.type}`}
            onClick={() => deleteAlert(a.$id)}
          >
            <div className="icon-container">
              {a.type === "error" && <BiErrorAlt />}
            </div>
            <p className="message">{a.message}</p>
            <div className="icon-container close">
              <BiTrashAlt />
            </div>
          </li>
        ))}
      </Alerts>

      <Navbar />
      <div className="layout-container">{children}</div>

      <div id="global-popup" />
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex-flow: column;

  .layout-container {
    height: 100%;
    min-height: calc(95vh - ${config.nav_size});
    max-width: 100vw;
  }
`;
