import { IconType } from "react-icons";

interface PriceList {
  popular?: boolean;
  title: string;
  price: number;
  list: Item[];
}
interface Item {
  Icon: IconType;
  text: string;
  not?: boolean;
}
