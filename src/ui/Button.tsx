import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = (props: IProps) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={`${className} bg-purple px-12 py-4 rounded-full text-white relative  `}
    >
      <span className="absolute top-1/2 rounded-[100%] inset-x-0 bottom-0 bg-purple blur-[25px]"></span>
      <span className="relative">{children}</span>
    </button>
  );
};

export default Button;
