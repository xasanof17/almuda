import { IconType } from "react-icons";

interface PriceList {
  popular?: boolean;
  title: string;
  price: number;
  text: string;
  href: string;
  list: Item[];
}
interface Item {
  icon: IconType;
  text: string;
  not?: boolean;
}
