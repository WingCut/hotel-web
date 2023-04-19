import React from "react";

export const Button = (props) => {
  const { children, className, type, onclick } = props;
  return (
    <>
      <button onClick={onclick} type={type} className={className}>
        {children}
      </button>
    </>
  );
};
export default Button;
