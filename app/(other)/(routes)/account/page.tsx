"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@auth0/nextjs-auth0/client";
import router from "next/navigation";
import { useRouter } from "next/navigation";

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
    const { user, error, isLoading } = useUser();
    const router = useRouter();

  return (
    <>
      <div className="h-[80vh] flex items-center justify-center flex-row gap-y-8">

        {user ? (
            <Card className="w-[400px] bg-[#192339] pb-6">
            <CardHeader className="flex items-start justify-center">
              <CardTitle className="text-white">Account Information</CardTitle>
              <CardDescription>
                View All of Your Account Info Here.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white pb-0">
              <p className="text-lg">
                <strong>Email:</strong> {user?.email}
              </p>
            </CardContent>
  
            <CardContent className="text-white pb-0">
              <p className="text-lg">
                <strong>Name:</strong> {user?.name}
              </p>
            </CardContent>
            
            <CardContent className="flex items-center justify-center pb-0">
              <Button 
              onClick={() => router.push("/api/auth/logout")}
              className="bg-red-400 rounded-md w-[200px] text-lg mt-2 hover:brightness-90">
                Logout
              </Button>
            </CardContent>
          </Card>
        ): (
            <h1 className="text-4xl"><span onClick={() => router.push("/api/auth/login")} className="text-blue-500 underline cursor-pointer">Log in</span> to view account.</h1>
        )}
        
      </div>
    </>
  );
};

export default Account;
