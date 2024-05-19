"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';
import { User, UserRound } from 'lucide-react';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {

  const { user, error, isLoading } = useUser();

  return (
    <React.Fragment>
      <div className="flex items-center justify-center w-full">
        <ul className="flex flex-row gap-2 text-2xl pl-8 pr-8 pt-4 pb-4 justify-between items-center w-full max-w-[1200px]">
          <Link href={"/"}>
            <li className="flex flex-row gap-2 items-center justify-center cursor-pointer">
              <Image src={"/logo.png"} alt="logo" width={64} height={64} />
              <p className="text-2xl">Law Firm Embedded Analytics</p>
            </li>
          </Link>
          <li className="flex items-center justify-center">
            <div className="flex flex-row gap-6 items-center justify-center">
              
              <Link href={"/about"}>
              <div className="bg-white text-black pt-1 pb-1 pl-4 pr-4 rounded-full">About</div>
                
              </Link>
              <Link href={"/contact"}>
              <div className="bg-white text-black pt-1 pb-1 pl-4 pr-4 rounded-full">
                Contact
              </div>
              </Link>
              <Link href={"/account"}>
                <div className="flex bg-white text-black h-[40px] w-[40px] rounded-full text-center items-center justify-center">
                  <UserRound />
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavBar;