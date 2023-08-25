"use client";
import { HeroBg, Logo } from "@/assets";
import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

type Social = {
  Icon: IconType;
  type?: string;
  title: string;
  text: string;
  href?: string;
};

const socials: Social[] = [
  {
    Icon: FiPhoneCall,
    type: "tel:",
    title: "+998 (90) 018 66 44",
    text: "Call us",
  },
  {
    Icon: FiMail,
    type: "mailto:",
    title: "info@almuda.uz",
    text: "Email us",
  },
  {
    Icon: MdOutlineLocationOn,
    href: "https://almuda.uz",
    title: "Tashkent",
    text: "Visit us",
  },
];

const Navbar = () => {
  const [scroll, setPosition] = useState(0);
  const pathname = usePathname();

  const handleScroll = () => {
    const position = window.screenY;
    setPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  console.log(scroll);

  return (
    <header className="relative h-screen">
      <nav className="fixed top-0 left-0 w-full z-50 py-6 bg-transparent">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center justify-center"
              title="Al-Muda Logo"
            >
              <div className="relative w-[160px] h-12">
                <Image
                  fill
                  src={Logo}
                  alt="Al-Muda"
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="flex items-center space-x-3">
              <ul className="flex items-center divide-x">
                {socials.map(({ Icon, title, text, href, type }, i) => (
                  <li key={i} className="flex items-start space-x-2 px-3">
                    <Icon className="w-6 h-6 text-white" />
                    <div className="flex flex-col items-start justify-center">
                      <Link
                        href={`${type ? type + title : href}`}
                        className="text-white text-lg font-bold leading-none mb-1"
                        target={href && "_blank"}
                        title={title}
                      >
                        {title}
                      </Link>
                      <p className="text-white text-base font-normal">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="btn-primary">Cost Calculator</button>
            </div>
          </div>
          <div className="flex items-center justify-between bg-primary py-5 px-7 w-full mt-8">
            <ul className="flex items-center space-x-6">
              {links.map(({ href, title }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className={pathname == href ? "link text-yellow" : "link"}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/" className="text-lg font-bold text-yellow">
              Refer & Earn
            </Link>
          </div>
        </div>
      </nav>
      <Image
        src={HeroBg}
        alt="hero bg"
        fill
        className="object-cover select-none"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 select-none" />
    </header>
  );
};

export default Navbar;
