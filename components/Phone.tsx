import Link from "next/link";
import { FaPhone } from "react-icons/fa";

const Phone = () => {
  return (
    <div className="fixed bottom-4 right-4 overflow-y-visible sm:bottom-5 md:bottom-7 md:right-5">
      <Link
        title="+998900186644"
        about="Phone number"
        href="tel:+998900186644"
        className="flex animate-bounce items-center justify-center rounded-full bg-blue-500 p-4"
      >
        <FaPhone className="h-7 w-7 text-white" />
      </Link>
    </div>
  );
};

export default Phone;
