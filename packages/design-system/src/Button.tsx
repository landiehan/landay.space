import React from "react";

type ButtonProps = React.PropsWithChildren<JSX.IntrinsicElements["button"]>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
