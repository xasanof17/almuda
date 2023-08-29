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
    <header className="sticky top-0 left-0 w-full py-5 z-10 bg-white">
      <nav className="flex items-center container">
        <Link
          href="/"
          className={`${
            toggleMenu ? "fixed top-5 left-4 z-20" : ""
          } flex items-center justify-center`}
        >
          <div className="relative w-[150px] h-12">
            <Image src={Logo} alt="Al-Muda Logo" fill />
          </div>
        </Link>
        <div className="flex items-center flex-1 lg:ml-[100px] justify-end lg:justify-between">
          <ul className="hidden lg:flex items-center space-x-8">
            {links.map(({ href, title }, i) => (
              <li key={i}>
                <Link href={href} className="link">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden sm:flex items-center space-x-6">
            <Link href="/" className="link">
              Sign In
            </Link>
            <button className="btn-primary uppercase">Calculator</button>
          </div>
          <button
            onClick={() => setMenu((prev) => !prev)}
            className={`${
              toggleMenu ? "fixed top-7 right-4 z-20" : ""
            } lg:hidden flex items-center justify-center ml-4`}
          >
            {toggleMenu ? (
              <MdClose className="w-7 h-7 text-primary" />
            ) : (
              <FiMenu className="w-7 h-7 text-primary" />
            )}
          </button>
        </div>
        {toggleMenu && (
          <div className="fixed top-0 left-0 min-h-screen w-screen flex items-center justify-center flex-col bg-white">
            <ul className="lg:hidden flex flex-col items-center space-y-8">
              {links.map(({ href, title }, i) => (
                <li key={i}>
                  <Link href={href} className="link text-xl">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex sm:hidden items-center justify-center space-x-6 mt-7">
              <Link href="/" className="link text-xl">
                Sign In
              </Link>
              <button className="btn-primary uppercase">Calculator</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
