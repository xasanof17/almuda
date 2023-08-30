import { JXLogo, Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

type Social = {
  Icon: IconType;
  name: "Telegram" | "Instagram" | "Facebook" | "Twitter" | "Github";
  href: string;
};

const socials: Social[] = [
  {
    Icon: FaFacebook,
    name: "Facebook",
    href: "https://facebook.com/xasanof17",
  },
  {
    Icon: FaInstagram,
    name: "Instagram",
    href: "https://instagram.com/1henotorious_",
  },
  {
    Icon: FaTwitter,
    name: "Twitter",
    href: "https://x.com/xasanof17",
  },
  {
    Icon: FaTelegramPlane,
    name: "Telegram",
    href: "https://t.me/xasanof17",
  },
  {
    Icon: FaGithub,
    name: "Github",
    href: "https://github.com/xasanof17",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().getHours();

  console.log(currentDate);

  return (
    <footer className="container">
      <div className="grid grid-cols-4 gap-5">
        <div className="flex flex-col items-start">
          <Link href="/" title="Al-Muda Logo">
            <div className="relative h-12 w-[150px]">
              <Image src={Logo} alt="Al-Muda logo" fill />
            </div>
          </Link>
          <ul className="mt-4 flex items-center space-x-2">
            {socials.map(({ Icon, name, href }, i) => (
              <li key={i}>
                <Link
                  target="_blank"
                  title={name}
                  href={href}
                  className="flex items-center justify-center"
                >
                  <Icon className="muted h-7 w-7 transition-colors duration-300 hover:text-blue-500" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-3 flex w-full items-center justify-center space-x-1 border-t-2 py-5">
        <p className="muted text-base font-medium md:text-lg">
          &copy; All rights reserved.
        </p>
        <Link
          href="https://portfoliowebapp.vercel.app"
          className="text-base font-medium md:text-lg"
          target="_blank"
        >
          Maked by <span className="font-bold text-blue-500 underline">JX</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
