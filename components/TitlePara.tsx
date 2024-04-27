import React from "react";

interface TitleParaProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

const TitlePara: React.FC<TitleParaProps> = ({ title, text, icon }) => {
  return (
    <>
      <div className="flex items-center mb-4">
        <div className="">
          <h3 className="text-3xl">{title}</h3>
          <p className="max-w-[400px] mt-2 ml-2">{text}</p>
        </div>
        {icon}
      </div>
    </>
  );
};

export default TitlePara;
