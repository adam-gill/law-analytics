import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface dashboardProps {}

const dashboard: React.FC<dashboardProps> = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-y-8">
        <Card className="w-[400px] bg-black pb-6">
          <CardHeader className="flex items-start justify-center">
            <CardTitle className="text-white">Login</CardTitle>
            <CardDescription>Login two View Your Dashboards</CardDescription>
          </CardHeader>
          <CardContent className="text-white pb-0">
            <p>Email</p>
          </CardContent>
          <Input
            className="bg-black items-start ml-6 w-[90%] text-white mb-2 outline-1 border-slate-500 focus:border-white"
            placeholder="example@email.com"
          ></Input>
          <CardContent className="text-white pb-0">
            <p>Password</p>
          </CardContent>
          <Input
            className="bg-black items-start ml-6 w-[90%] text-white mb-2 outline-1 border-slate-500 focus:border-white"
            placeholder="password"
            type="password"
          ></Input>
          <CardContent className="flex items-center justify-center pb-0">
            <Button className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-300 rounded-md items-center justify-center w-[200px] text-lg mt-2 hover:brightness-90">
              Login
            </Button>
          </CardContent>
        </Card>

        <iframe
          className="w-[1000px] h-[600px]"
          src="https://fenix-ai-partner.domo.com/embed/card/private/qYkzG"
        ></iframe>
      </div>
    </>
  );
};

export default dashboard;
