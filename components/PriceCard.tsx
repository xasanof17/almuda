import Link from "next/link";
import { PriceList } from "@/types";
import { BsArrowRight } from "react-icons/bs";

const PriceCard = ({ popular, title, price, text, href, list }: PriceList) => {
  return (
    <div
      className={`group flex w-full flex-col items-center rounded-xl border-2 ${
        popular ? "border-secondary" : "border-slate-200"
      } px-5 py-7 transition-all duration-200 ease-out ${
        popular
          ? "shadow-md hover:border-bright hover:bg-transparent"
          : "shadow hover:border-bright"
      }`}
    >
      {popular ? (
        <span className="text-normal mb-3 rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-400">
          Most Popular
        </span>
      ) : null}
      <h3
        title={title}
        className="mb-4 text-xl font-medium text-primary md:text-2xl"
      >
        {title}
      </h3>
      <span
        title={`$${price}`}
        className="text-4xl font-bold text-primary md:text-5xl"
      >
        ${price}
      </span>
      <p title={text} className="muted mb-2 mt-3 text-lg font-normal">
        {text}
      </p>
      <Link
        href={href}
        title="Go to annual plan"
        className="flex items-center space-x-2"
      >
        <p className="text-lg font-medium text-secondary">Go to annual plan</p>
        <BsArrowRight className="h-5 w-5 text-secondary" />
      </Link>
      <button
        type="button"
        title="Get Started"
        className="group-hover:btn-secondary my-6 w-full rounded-lg !border-2 bg-slate-600 !py-2 text-center !text-lg font-medium !normal-case text-white"
      >
        Get Started
      </button>
      <ul className="flex flex-col space-y-3">
        {list.map((item, i) => (
          <li
            title={item.text}
            key={i}
            className="flex items-start space-x-2 md:items-center"
          >
            <item.icon
              className={`h-6 w-6 ${item.not ? "muted" : "text-primary"}`}
            />
            <p
              className={`text-lg font-medium ${
                item.not ? "muted line-through" : "text-primary"
              }`}
            >
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
