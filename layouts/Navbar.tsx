"use client";
import { useState } from "react";
import { Logo } from "@/assets";
import { links } from "@/constants";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [toggleMenu, setMenu] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky left-0 top-0 z-10 w-full py-3 backdrop-blur-lg sm:py-5">
      <nav className="container flex items-center">
        <Link
          href="/"
          className={`${
            toggleMenu ? "fixed left-4 top-3 z-20 md:top-5" : ""
          } flex items-center justify-center`}
        >
          <div className="relative h-12 w-[150px]">
            <Image
              src={Logo}
              alt="Al-Muda Logo"
              fill
              className="objectContain"
            />
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-end lg:ml-[100px] lg:justify-between">
          <ul className="hidden items-center space-x-8 lg:flex">
            {links.map(({ href, title }, i) => (
              <li key={i}>
                <Link
                  title={title}
                  href={href}
                  className={`${
                    pathname == href ? "link text-secondary" : "link"
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setMenu((prev) => !prev)}
            className={`${
              toggleMenu ? "fixed right-4 top-5 z-20 md:top-7" : ""
            } ml-4 flex items-center justify-center lg:hidden`}
          >
            {toggleMenu ? (
              <MdClose className="h-7 w-7 text-primary" />
            ) : (
              <FiMenu className="h-7 w-7 text-primary" />
            )}
          </button>
        </div>
        {toggleMenu && (
          <div className="min-w-screen fixed inset-0 z-10 flex min-h-screen flex-col items-center justify-center overflow-y-hidden bg-white transition-all duration-300">
            <ul className="flex flex-col items-center space-y-8 lg:hidden">
              {links.map(({ href, title }, i) => (
                <li key={i}>
                  <Link
                    onClick={() => setMenu((prev) => !prev)}
                    title={title}
                    href={href}
                    className={`${
                      pathname == href ? "link text-secondary" : "link"
                    } text-xl`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
