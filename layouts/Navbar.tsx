"use client";
import { HeroBg, Logo } from "@/assets";
import { Hero, Nav, TopInfo } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [scroll, setPosition] = useState<number>(0);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative min-h-screen w-full font-roboto overflow-x-hidden">
      <nav
        className={`${
          toggleMenu ? "fixed" : "absolute"
        } top-0 left-0 w-full z-40 py-3 md:py-6 bg-transparent`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center justify-center"
              title="Al-Muda Logo"
            >
              <div className="relative w-[160px] h-12">
                <Image fill src={Logo} alt="Al-Muda" objectFit="contain" />
              </div>
            </Link>
            <div className="flex items-center md:space-x-3">
              <button
                onClick={() => setToggleMenu((prev) => !prev)}
                className={`md:hidden flex items-center  rounded-full p-3 ${
                  !toggleMenu ? "bg-primary" : "bg-white"
                }`}
              >
                {!toggleMenu ? (
                  <FiMenu className="w-6 h-6 text-white" />
                ) : (
                  <MdClose className="w-6 h-6 text-primary" />
                )}
              </button>
              <TopInfo />
              <button className="btn-primary xl:block hidden">
                Cost Calculator
              </button>
            </div>
          </div>
          <Nav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </div>
      </nav>
      <Image
        src={HeroBg}
        alt="hero bg"
        fill
        className="select-none"
        objectFit="cover"
        objectPosition="center"
        sizes="100vh"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 select-none" />
      <Hero />
      <div className="absolute bottom-3 left-1/2">
        <button className="animate-bounce flex items-center">
          <FaAnglesDown className="w-8 md:w-10 h-8 md:h-10 text-white" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
