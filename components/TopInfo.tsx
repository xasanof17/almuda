import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FiPhoneCall, FiMail, FiMenu } from "react-icons/fi";
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

const TopInfo = () => {
  return (
    <ul className="hidden md:flex items-center divide-x">
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
  );
};

export default TopInfo;
