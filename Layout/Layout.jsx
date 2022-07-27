import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Subcribe from "../components/Subcribe";

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;
  console.log(path);
  return (
    <div>
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
