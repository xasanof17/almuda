import { AdliyaLogo, Discount, Reliability, Secure } from "@/assets";
import { PriceList } from "@/types";
import { BiSolidCreditCardFront } from "react-icons/bi";
import { BsBoxFill, BsFillChatDotsFill, BsFire } from "react-icons/bs";
import { FaSmileBeam } from "react-icons/fa";
import { MdOutlineReport, MdSecurity } from "react-icons/md";
import { TbSend } from "react-icons/tb";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
];

const features = [
  {
    src: Discount,
    title: "Affordable Pricing",
    text: `A dictionary of over 200 Latin words,with a handful of model sentence. structures, to generate Lorem Ipsum`,
    href: "/",
  },
  {
    src: Reliability,
    title: "Seamless Reliability",
    text: `A dictionary of over 200 Latin words,with a handful of model sentence. structures, to generate Lorem Ipsum`,
    href: "/",
  },
  {
    src: Secure,
    title: "Secure Collaboration",
    text: `A dictionary of over 200 Latin words,with a handful of model sentence. structures, to generate Lorem Ipsum`,
    href: "/",
  },
];

const priceList: PriceList[] = [
  {
    title: "Starter",
    price: 800,
    text: "$19 USD per month, paid manually",
    href: "/",
    list: [
      {
        icon: BiSolidCreditCardFront,
        text: "All tools you need to manage payments",
      },
      {
        icon: FaSmileBeam,
        text: "No setup, monthly, or hidden fees",
      },
      {
        icon: MdSecurity,
        text: "Comprehensive security",
      },
      {
        icon: TbSend,
        text: "Get hundreds of feature updates",
        not: true,
      },
      {
        icon: BsFire,
        text: "Payouts to your bank account",
        not: true,
      },
      {
        icon: MdOutlineReport,
        text: "Financial reconcilition and reporting",
        not: true,
      },
      {
        icon: BsFillChatDotsFill,
        text: "24/7 phone, chat and email support",
        not: true,
      },
      {
        icon: BsBoxFill,
        text: "Robust developer platform",
        not: true,
      },
    ],
  },
  {
    popular: true,
    title: "Premium",
    price: 1000,
    text: "$159 USD per month, paid manually",
    href: "/",
    list: [
      {
        icon: BiSolidCreditCardFront,
        text: "All tools you need to manage payments",
      },
      {
        icon: FaSmileBeam,
        text: "No setup, monthly, or hidden fees",
      },
      {
        icon: MdSecurity,
        text: "Comprehensive security",
      },
      {
        icon: TbSend,
        text: "Get hundreds of feature updates",
      },
      {
        icon: BsFire,
        text: "Payouts to your bank account",
      },
      {
        icon: MdOutlineReport,
        text: "Financial reconcilition and reporting",
        not: true,
      },
      {
        icon: BsFillChatDotsFill,
        text: "24/7 phone, chat and email support",
        not: true,
      },
      {
        icon: BsBoxFill,
        text: "Robust developer platform",
        not: true,
      },
    ],
  },
  {
    title: "Enterprise",
    price: 1500,
    text: "$499 USD per month, paid manually",
    href: "/",
    list: [
      {
        icon: BiSolidCreditCardFront,
        text: "All tools you need to manage payments",
      },
      {
        icon: FaSmileBeam,
        text: "No setup, monthly, or hidden fees",
      },
      {
        icon: MdSecurity,
        text: "Comprehensive security",
      },
      {
        icon: TbSend,
        text: "Get hundreds of feature updates",
      },
      {
        icon: BsFire,
        text: "Payouts to your bank account",
      },
      {
        icon: MdOutlineReport,
        text: "Financial reconcilition and reporting",
      },
      {
        icon: BsFillChatDotsFill,
        text: "24/7 phone, chat and email support",
      },
      {
        icon: BsBoxFill,
        text: "Robust developer platform",
      },
    ],
  },
];

export { links, features, priceList };
