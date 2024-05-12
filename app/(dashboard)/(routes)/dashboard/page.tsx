"use client";

import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const login = () => {
    loginWithRedirect();
  };

  const notify = (msg: string) => toast(msg, {
    position: "top-center",
    autoClose: 3000,
    theme: "dark"
  });

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-y-8">
        {!isAuthenticated && (
          <Card className="w-[400px] bg-[#192339] pb-6">
            <CardHeader className="flex items-start justify-center">
              <CardTitle className="text-white">Login</CardTitle>
              <CardDescription>Login to View Your Dashboards</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center pb-0">
              <Button
                onClick={login}
                className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-300 rounded-full items-center justify-center w-[200px] text-lg mt-2 hover:brightness-90"
              >
                Login
              </Button>
              <ToastContainer position="top-center" theme="dark"/>
            </CardContent>
          </Card>
        )}
        {isAuthenticated ? (
          <h1>Logged in! Displaying the dashboard...</h1>
          // Your iframe or dashboard content here
        ) : (
          <h1>Log in to view dashboards.</h1>
        )}
      </div>
    </>
  );
};

export default Dashboard;
