import Head from "next/head";
import React, { Fragment, ReactNode, useEffect, useState } from "react";
import Menu from "../Menu";
import Footer from "../Footer";

interface Props {
  children?: ReactNode;
}

// const CACHE_DURATION = 24 * 60 * 60 * 1000; // 1 day in milliseconds

const LayOut = (props: Props) => {
  const { children } = props;
  const [category, setCategory] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      // const cachedData = localStorage.getItem('categoryData');
      // const cachedTime = localStorage.getItem('categoryDataTime');
      
      // if (cachedData && cachedTime) {
      //   const age = Date.now() - parseInt(cachedTime);
      //   if (age < CACHE_DURATION) {
      //     setCategory(JSON.parse(cachedData));
      //     return;
      //   }
      // }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/category`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await res.json();
        // localStorage.setItem('categoryData', JSON.stringify(fetchedData));
        // localStorage.setItem('categoryDataTime', Date.now().toString());
        setCategory(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          name="viewport"
        />
      </Head>
      <Menu category={category} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default LayOut;
