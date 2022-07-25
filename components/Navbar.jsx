import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const navItem = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Bussiness", href: "/bussiness" },
    { name: "Politics", href: "/Politics" },
    { name: "Podcast", href: "/Podcast" },
    { name: "Videos", href: "/video" },
    { name: "Agriculture", href: "agric" },
    { name: "Sports", href: "sport" },
    { name: "Opinion", href: "opinion" },
    { name: "Education", href: "education" },
    { name: "Entertainment", href: "entataiment" },
  ];

  const router = useRouter();
  const currentRouter = router.pathname;
  console.log(currentRouter);
  return (
    <div className="">
      <div className=" pb-4">
        <h1 className="text-center pt-4 text-2xl font-bold ">
          {" "}
          AVANT-GARDE MEDIA{" "}
        </h1>
        <p className="text-center text-xs">
          ...fulfilling {`nation's`} information needs.
        </p>
      </div>
      {/* the Navbar */}
      <div className="overflow-x-hidden nav hover:overflow-x-auto justify-center px-2 bg-gold text-center flex">
        {navItem.map(({ name, href }, i) => {
          return (
            <Link href={href} key={i}>
              <a
                className={`text-sm py-2 inline-block uppercase mr-8 ${
                  currentRouter === href ? "text-black" : "text-white "
                }}`}
              >
                {name}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
