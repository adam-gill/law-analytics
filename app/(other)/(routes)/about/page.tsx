"use client";

import React from "react";
import { Swords, Award, HandCoins, X } from "lucide-react";
import TitlePara from "@/components/TitlePara";
import Image from "next/image";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
  return (
    <>
      <div className="flex items-center mx-auto justify-center flex-col">
        <h1 className="text-[72px]">About</h1>
        <TitlePara
          title="Challenges:"
          text="Law firms do not have efficient methods of project management, and under utilize their data to track relevant work. Fenix seeks to empower these firms with automated BI tools specifically designed to enhance project and data management."
          icon={<Swords className="ml-4" size={72} />}
        />
        <TitlePara
          title="Solution:"
          text="Create a template pipeline for a BI automation tool that pulls together MongoDB, Snowflake/BigQuery, and Domo to automate a continually updating dashboard for law firm stakeholders."
          icon={<Award className="ml-4" size={72} />}
        />
        <TitlePara
          title="Impact:"
          text="Fenix will have a template system they can bring to law firms to track attorney efficiency and client projects."
          icon={<HandCoins className="ml-4" size={72} />}
        />

        <div className="flex items-center gap-x-4 mt-5">
          <Image
            className="rounded-md"
            src="/fenix.png"
            width="400"
            height="150"
            alt="fenix"
          ></Image>
          <X size={64} />
          <Image
            className="rounded-md"
            src="/bcamp.png"
            width="350"
            height="100"
            alt="bcamp"
          ></Image>
        </div>

        <h1 className="text-[72px]">Team</h1>
        <div className="max-w-[800px]">
          <ScrollMenu>
            <TitlePara
              title="Daniel Ha"
              text="Mentor and Scrum Master"
              icon={<Swords className="ml-4" size={72} />}
            />
            <TitlePara
              title="Adam Gill"
              text="Mentor and Scrum Master"
              icon={<Swords className="ml-4" size={72} />}
            />
            <TitlePara
              title="Adam Gill"
              text="Mentor and Scrum Master"
              icon={<Swords className="ml-4" size={72} />}
            />
            <TitlePara
              title="Adam Gill"
              text="Mentor and Scrum Master"
              icon={<Swords className="ml-4" size={72} />}
            />
            <TitlePara
              title="Adam Gill"
              text="Mentor and Scrum Master"
              icon={<Swords className="ml-4" size={72} />}
            />
          </ScrollMenu>
        </div>
      </div>
    </>
  );
};

export default about;
