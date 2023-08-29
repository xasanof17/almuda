"use client";
import { useState } from "react";
import { Logo } from "@/assets";
import { links } from "@/constants";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const variants = {
  base: "",
  menu: "fixed top-0 left-0 z-20",
};

const Navbar = () => {
  const [toggleMenu, setMenu] = useState<boolean>(false);
  return (
    <header className="sticky left-0 top-0 z-10 w-full py-5 backdrop-blur-lg">
      <nav className="container flex items-center">
        <Link
          href="/"
          className={`${
            toggleMenu ? "fixed left-4 top-5 z-20" : ""
          } flex items-center justify-center`}
        >
          <div className="relative h-12 w-[150px]">
            <Image src={Logo} alt="Al-Muda Logo" fill />
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-end lg:ml-[100px] lg:justify-between">
          <ul className="hidden items-center space-x-8 lg:flex">
            {links.map(({ href, title }, i) => (
              <li key={i}>
                <Link title={title} href={href} className="link">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center sm:space-x-6">
            <button title="Sign In" className="btn-primary hidden sm:flex">
              Sign In
            </button>
            <button
              onClick={() => setMenu((prev) => !prev)}
              className={`${
                toggleMenu ? "fixed right-4 top-7 z-20" : ""
              } ml-4 flex items-center justify-center lg:hidden`}
            >
              {toggleMenu ? (
                <MdClose className="h-7 w-7 text-primary" />
              ) : (
                <FiMenu className="h-7 w-7 text-primary" />
              )}
            </button>
          </div>
        </div>
        {toggleMenu && (
          <div className="fixed left-0 top-0 flex min-h-screen w-screen flex-col items-center justify-center bg-white">
            <ul className="flex flex-col items-center space-y-8 lg:hidden">
              {links.map(({ href, title }, i) => (
                <li key={i}>
                  <Link title={title} href={href} className="link text-xl">
                    {title}
                  </Link>
                </li>
              ))}
              <button title="Sign In" className="btn-primary">
                Sign In
              </button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
