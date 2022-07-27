import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Subcribe from "../components/Subcribe";
import Head from "next/head";

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;
  console.log(path);
  return (
    <div>
      <Head>
        <title>Avant-Garde Media</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />{" "}
      </Head>
      <Navbar />
      <div>{children}</div>
      <div className={`${path == "/" ? " block " : " hidden "}`}>
        <Subcribe />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
