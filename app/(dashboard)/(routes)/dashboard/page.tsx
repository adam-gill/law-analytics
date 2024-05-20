"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ChevronDown, ChevronUp } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const { user, error, isLoading } = useUser();

  const login = (email: string, password: string) => {
    alert(`pretend login. email=${email} password=${password}`);
  };

  const notify = (msg: string) =>
    toast(msg, {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });

  const dashboards: { name: string; index: number; url: string }[] = [
    {
      name: "Client and Project Data",
      index: 0,
      url: "https://fenix-ai-partner.domo.com/embed/pages/private/E9owl",
    },
    {
      name: "Attorney Efficiency",
      index: 1,
      url: "https://fenix-ai-partner.domo.com/embed/pages/private/G5q05",
    },
    {
      name: "Attorney Bandwidth/Availability Metrics",
      index: 2,
      url: "https://fenix-ai-partner.domo.com/embed/pages/private/1rALq",
    },
  ];

  const [dashboard, SetDashboard] = useState<number>(0);
  const [isOpen, SetIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="h-[150vh] flex items-center justify-start flex-col gap-y-8 content-center">
        {user && <DropdownMenu open={isOpen} onOpenChange={() => SetIsOpen(!isOpen)}>
          <DropdownMenuTrigger className="flex flex-row bg-white text-black rounded-md p-2 gap-y-4 outline-none">
            <span className="mr-1">{dashboards[dashboard].name}</span>{" "}
            {isOpen ? <ChevronUp /> : <ChevronDown />}{" "}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuLabel>Your Dashboards:</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => SetDashboard(0)}>
              Client and Project Data
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => SetDashboard(1)}>
              Attorney Efficiency
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => SetDashboard(2)}>
              Attorney Bandwidth/Availability Metrics
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>}

        {user ? (
          <iframe
            className={`w-[1200px] h-full`}
            src={dashboards[dashboard].url}
          ></iframe>
        ) : (
          <h1 className="text-4xl mt-[200px]">
            <span className="text-blue-500 underline cursor-pointer">
              Log in
            </span>
            to view dashboards.
          </h1>
        )}
      </div>
    </>
  );
};

export default Dashboard;

// TODO : add error handling for login and loading states
