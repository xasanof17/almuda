import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="grid grid-cols-4 gap-5">
        <div className="flex flex-col items-start">
          <Link href="/" title="Al-Muda Logo">
            <div className="relative h-12 w-[150px]">
              <Image src={Logo} alt="Al-Muda logo" fill />
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-3 flex w-full items-center justify-between border-t-2 py-5">
        <p className="muted text-lg font-semibold">© All rights reserved.</p>
        <Link
          href="https://portfoliowebapp.vercel.app"
          className="muted text-lg font-medium"
          target="_blank"
        >
          Maked with <span className="font-bold text-blue-500">JX</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
