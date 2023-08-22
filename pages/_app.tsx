import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/globals";
import { AuthProvider, AlertsProvider } from "@/context";

import { IconContext } from "react-icons";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlertsProvider>
      <AuthProvider>
        <IconContext.Provider
          value={{
            className: "icon",
            style: {
              verticalAlign: "middle",
            },
          }}
        >
          <GlobalStyles />
          <Component {...pageProps} />
        </IconContext.Provider>
      </AuthProvider>
    </AlertsProvider>
  );
}
