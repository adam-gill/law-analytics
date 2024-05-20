import React from "react";

interface DashboardCardProps {
  index: number;
  url: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  index,
  url,
}) => {
  return (
    <div className="h-full">
      {index === 2 ? (
        <>
          <iframe className={`w-[1200px] h-full mb-4`} src={"https://fenix-ai-partner.domo.com/embed/pages/private/JqwBy"}></iframe>
          <iframe className={`w-[1200px] h-full`} src={"https://fenix-ai-partner.domo.com/embed/pages/private/1rALq"}></iframe>
        </>
      ) : (
        <iframe className={`w-[1200px] h-full`} src={url}></iframe>
      )}
    </div>
  );
};

export default DashboardCard;
