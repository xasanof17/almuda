import { StaticImport } from "next/image";
import { IconType } from "react-icons";

interface Features {
  src: string | StaticImport;
  title: string;
  text: string;
}

type PriceItem = {
  Icon: IconType;
  text: string;
  not?: boolean;
};

interface PriceList {
  popular?: boolean;
  title: string;
  price: number;
  list: PriceItem[];
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject?: string;
  phoneNumber: string;
  message?: string;
}

type DialogItem = {
  value: string | number;
  label: string;
};

interface DialogData {
  businness_activity: Array<DialogItem>;
  premises: Array<DialogItem>;
  owners: number | string;
  vizas: number | string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
}
