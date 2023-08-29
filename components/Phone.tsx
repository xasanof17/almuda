import Link from "next/link";
import { FaPhone } from "react-icons/fa";

const Phone = () => {
  return (
    <div className="fixed bottom-5 right-4 md:bottom-7 md:right-5">
      <Link
        href="tel:+998 90 018 66 44"
        className="flex animate-bounce items-center justify-center rounded-full bg-bright p-4"
      >
        <FaPhone className="h-7 w-7 text-white" />
      </Link>
    </div>
  );
};

export default Phone;
