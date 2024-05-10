import Head from "next/head";
import React, { Fragment, ReactNode } from "react";
import Menu from "../Menu";
import Footer from "../Footer";

interface Props {
  children?: ReactNode;
}

const LayOut = (props: Props) => {
  const { children } = props;
  return (
    <Fragment>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          name="viewport"
        />
      </Head>
      <Menu />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default LayOut;
