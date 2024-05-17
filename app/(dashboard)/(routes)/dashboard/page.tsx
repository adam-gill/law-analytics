"use client";

import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";

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

  return (
    <>
      <div className="h-[80vh] flex items-center justify-center flex-col gap-y-8 content-center">
        {user ? (
          <iframe
            className="w-[1000px] h-[800px]"
            src="https://fenix-ai-partner.domo.com/embed/card/private/2vBQJ"
          ></iframe>
        ) : (
          <h1 className="text-4xl">
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
