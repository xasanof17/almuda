import { PriceList } from "@/types";
import { BiSolidCreditCardFront } from "react-icons/bi";
import { BsBoxFill, BsFillChatDotsFill, BsFire } from "react-icons/bs";
import { FaSmileBeam } from "react-icons/fa";
import { MdOutlineReport, MdSecurity } from "react-icons/md";
import { TbSend } from "react-icons/tb";

export const priceList: PriceList[] = [
  {
    title: "Starter",
    price: 800,
    list: [
      {
        Icon: BiSolidCreditCardFront,
        text: "Opening bank account",
      },
      {
        Icon: FaSmileBeam,
        text: "Inclusive of 2 activities",
      },
      {
        Icon: MdSecurity,
        text: "Multiple shareholders permitted",
      },
      {
        Icon: TbSend,
        text: "Lease agreement",
        not: true,
      },
      {
        Icon: BsFire,
        text: "100% foreign ownership",
        not: true,
      },
      {
        Icon: MdOutlineReport,
        text: "1,000+ Professional Activities available",
        not: true,
      },
      {
        Icon: BsFillChatDotsFill,
        text: "Visa",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "Valid work permit",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "No paid-up share capital",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "Guaranteed renewal rate for 1 years!",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "Free company stamp",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "24/7 phone, chat and email support",
        not: true,
      },
    ],
  },
  {
    popular: true,
    title: "Premium",
    price: 1000,
    list: [
      {
        Icon: BiSolidCreditCardFront,
        text: "Opening bank account",
      },
      {
        Icon: FaSmileBeam,
        text: "Inclusive of 2 activitiess",
      },
      {
        Icon: MdSecurity,
        text: "Multiple shareholders permitted",
      },
      {
        Icon: TbSend,
        text: "Lease agreement",
      },
      {
        Icon: BsFire,
        text: "100% foreign ownership",
      },
      {
        Icon: MdOutlineReport,
        text: "1,000+ Professional Activities available",
      },
      {
        Icon: BsFillChatDotsFill,
        text: "Visa",
      },
      {
        Icon: BsBoxFill,
        text: "Valid work permit",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "No paid-up share capital",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "Guaranteed renewal rate for 1 years!",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "Free company stamp",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "24/7 phone, chat and email support",
        not: true,
      },
    ],
  },
  {
    title: "Enterprise",
    price: 1500,
    list: [
      {
        Icon: BiSolidCreditCardFront,
        text: "Opening bank account",
      },
      {
        Icon: FaSmileBeam,
        text: "Inclusive of 2 activitiess",
      },
      {
        Icon: MdSecurity,
        text: "Multiple shareholders permitted",
      },
      {
        Icon: TbSend,
        text: "Lease agreement",
      },
      {
        Icon: BsFire,
        text: "100% foreign ownership",
      },
      {
        Icon: MdOutlineReport,
        text: "1,000+ Professional Activities available",
      },
      {
        Icon: BsFillChatDotsFill,
        text: "Visa",
      },
      {
        Icon: BsBoxFill,
        text: "Valid work permit",
      },
      {
        Icon: BsBoxFill,
        text: "No paid-up share capital",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "Guaranteed renewal rate for 1 years!",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "Free company stamp",
        not: true,
      },
      {
        Icon: BsBoxFill,
        text: "24/7 phone, chat and email support",
        not: true,
      },
    ],
  },
];
