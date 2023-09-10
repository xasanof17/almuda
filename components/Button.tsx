"use client";

import {
  Dispatch,
  FC,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import { IconType } from "react-icons";

interface IButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  onClick?: Dispatch<SetStateAction<boolean>>;
  className?: string;
  title?: string;
  text?: string;
  Icon?: IconType;
}

export const Button: FC<IButtonProps> = ({
  type,
  onClick,
  className,
  title,
  text,
  Icon,
}) => {
  return (
    <button
      title={title}
      type={type}
      onClick={() => onClick}
      className={className}
    >
      {Icon ? <Icon className="h-7 w-7 text-black" /> : text}
    </button>
  );
};
