import type { AppProps } from "@src/types";

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
