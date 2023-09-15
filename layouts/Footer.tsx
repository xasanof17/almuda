import { Logo } from "@/assets";
import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

type Social = {
  Icon: IconType;
  name: "Telegram" | "Instagram" | "Facebook" | "Linkedin" | "Github";
  href: string;
};

const socials: Social[] = [
  {
    Icon: FaFacebook,
    name: "Facebook",
    href: "https://facebook.com/almuda",
  },
  {
    Icon: FaInstagram,
    name: "Instagram",
    href: "https://instagram.com/almuda",
  },
  {
    Icon: FaLinkedinIn,
    name: "Linkedin",
    href: "https://linkedin.com/almuda",
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

  return (
    <footer className="shadow">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.48002518046!2d69.19696640291602!3d41.282697074634214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1693639724123!5m2!1sen!2s"
        style={{ border: 0, width: "100%", height: 500 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container grid grid-cols-1 gap-5 pt-6 md:grid-cols-3">
        <div className="flex flex-col items-start">
          <Link href="/" title="Al-Muda Logo">
            <div className="relative h-12 w-[150px]">
              <Image
                src={Logo}
                alt="Al-Muda logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <ul className="mt-4 flex items-center space-x-3">
            {socials.map(({ Icon, name, href }, i) => (
              <li key={i}>
                <Link
                  target="_blank"
                  title={name}
                  href={href}
                  className="flex items-center justify-center"
                >
                  <Icon className="muted h-6 w-6 transition-colors duration-300 hover:text-bright md:h-7 md:w-7" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-6 text-xl font-semibold text-secondary">Company</h3>
          <ul className="flex flex-col items-start space-y-2">
            {links.map(({ href, title }, i) => (
              <li key={i}>
                <Link href={href} className="link">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-6 text-xl font-semibold text-secondary">
            Contact Us
          </h3>
          <ul className="flex flex-col items-start">
            <li className="flex items-center space-x-3">
              <FiMail className="h-6 w-6 text-primary" />
              <Link href="mailto:info@almuda.uz" className="link">
                info@almuda.uz
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <FiPhone className="h-6 w-6 text-primary" />
              <Link href="tel:+998900198505" className="link">
                +998900198505
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <FiMapPin className="h-6 w-6 text-primary" />
              <Link
                href="https://goo.gl/maps/Rsm4ZGvht66GDrJcA"
                className="link"
                target="_blank"
              >
                View on Google Map
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex w-full items-center justify-center space-x-1 border-t-2 py-5">
        <p className="muted text-base font-medium md:text-lg">
          &copy; All rights reserved {currentYear}.
        </p>
        <Link
          href="https://portfoliowebapp.vercel.app"
          className="text-base font-medium md:text-lg"
          target="_blank"
        >
          Made by <span className="font-bold text-secondary underline">JX</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
