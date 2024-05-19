import { Linkedin } from "lucide-react";
import React from "react";

interface PersonCardProps {
  person: any;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div className="Person-card">
      <div className="flex items-center flex-col">
        <a target="_blank" href={person.linkedIn} className="text-xl">
          {person.name}
        </a>
        <a target="_blank" href={person.linkedIn}>
          <img width="200px" src={person.img} />
        </a>
      </div>
    </div>
  );
};

export default PersonCard;
