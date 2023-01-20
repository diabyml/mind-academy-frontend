import React from "react";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "subtle" | "accent" | "disabled" | "inverted" | "danger";
  size?: "sm" | "md" | "lg" | "full-width";
  handler?: () => void;
}

const Button: React.FC<Props> = ({ children, variant, size,handler }) => {
  return (
    <button className={`btn btn--${variant} btn--${size}`} onClick={handler} > {children} </button>
  );
};

export default Button;
