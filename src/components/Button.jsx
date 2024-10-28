import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`py-2 px-4 rounded-lg  ${type} ${bgColor} ${textColor} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
