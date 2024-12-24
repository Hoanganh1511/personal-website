import React from "react";
interface IProps {
  title: string;
  description: string;
}
const TitlePage = ({ title, description }: IProps) => {
  return (
    <div className="">
      <h1 className="mb-2 text-[30px] font-bold font-plex-mono">{title}</h1>
      <p className="mt-[8px] italic">{description}</p>
    </div>
  );
};

export default TitlePage;
