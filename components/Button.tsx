"use client";

import { Dispatch, FC, ReactNode, SetStateAction } from "react";

interface IButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  onClick?: Dispatch<SetStateAction<boolean>>;
  className?: string;
  title?: string;
  text?: string;
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = ({
  type,
  onClick,
  className,
  title,
  text,
  children,
}) => {
  return (
    <button
      title={title}
      type={type}
      onClick={() => onClick}
      className={className}
    >
      {children ? children : text}
    </button>
  );
};
