import GlobalStyle from "styles/globalStyle";
import type { AppProps } from "next/app";

const MyApp = ({ Component, ...rest }: AppProps) => {
  return (
    <>
      <GlobalStyle />
        <Component />
    </>
  );
};

export default MyApp;
