"use client";
import Button from "@/ui/Button";

interface IProps {
  title: string;
  desc: string;
  image: string;
  buttonText: string;
  handleClick: (name: string) => void;
}

export default function Card({
  title,
  desc,
  image,
  buttonText,
  handleClick,
}: IProps) {
  return (
    <div className="max-w-[390px] h-[520px] bg-white p-12 shadow-card mt-2 rounded-card">
      <figure className="text-center">
        <img src={image} alt={title} className="w-48 h-48 mx-auto " />
        <h5 className="text-black font-bold text-[28px] mt-[28px] text-center ">
          {title}
        </h5>
        <p className="text-center text-secondary font-medium text-[18px] mt-2 ">
          {desc}
        </p>
        <div className="mt-6">
          <Button handleClick={handleClick}>{buttonText}</Button>
        </div>
      </figure>
    </div>
  );
}
