"use client";
import { links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type Props = {
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
};

const variants = {
  base: "hidden md:flex items-center justify-between bg-primary py-5 px-7 max-w-full mt-8",
  menu: "fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center -z-40 bg-primary transition-all duration-300",
  listBase: "flex items-center space-x-6",
  listMenu: "flex flex-col items-center justify-center space-y-6",
};

const Nav = ({ toggleMenu, setToggleMenu }: Props) => {
  const pathname = usePathname();
  return (
    <div className={`${toggleMenu ? variants.menu : variants.base}`}>
      <ul className={`${toggleMenu ? variants.listMenu : variants.listBase}`}>
        {links.map(({ href, title }, i) => (
          <li key={i}>
            <Link
              href={href}
              className={
                pathname == href
                  ? `link text-yellow ${toggleMenu && "text-xl"}`
                  : `link ${toggleMenu && "text-xl"}`
              }
              onClick={() => setToggleMenu((prev) => !prev)}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/"
        className={`text-lg font-bold text-yellow ${toggleMenu ? "mt-6" : ""}`}
      >
        Refer & Earn
      </Link>
    </div>
  );
};

export default Nav;
