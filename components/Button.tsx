"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { IconType } from "react-icons";

interface IButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  onClick?: () => void | Dispatch<SetStateAction<boolean>>;
  className?: string;
  title?: string;
  text?: string;
  Icon?: IconType;
  isLoading?: boolean;
}

export const Button: FC<IButtonProps> = ({
  type,
  onClick,
  className,
  title,
  text,
  Icon,
  isLoading,
}) => {
  return (
    <button role="button" title={title} type={type} onClick={onClick} className={className}>
      {Icon ? (
        <Icon className="h-7 w-7 text-black" />
      ) : !isLoading ? (
        text
      ) : (
        "Loading..."
      )}
    </button>
  );
};
