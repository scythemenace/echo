import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/*We'll use this section as a navigation component*/
const LeftSidebar = () => {
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        {/*Link to homepage*/}
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image
            src="/icons/logo.png"
            alt="logo"
            width={30}
            height={30}
          ></Image>
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Echo
          </h1>
        </Link>

        {sidebarLinks.map(({ route, label }) => {
          // eslint-disable-next-line react/jsx-key
          return <Link href={route}>{label}</Link>;
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
