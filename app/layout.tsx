import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Law Firm Embedded Analytics",
  description: "Web app for the BCAMP Law Firm Project",
  icons: "/logo.png",
  openGraph: {
    images:
      "https://bcampdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3eba391-ed29-4ab2-894d-a1d1a71754ad%2Ff1e596aa-96c4-4dc5-8a71-27b8675dcc9e%2FUntitled.png?table=block&id=bdb7385e-6265-4adb-baa2-975290f68a06&spaceId=d3eba391-ed29-4ab2-894d-a1d1a71754ad&width=800&userId=&cache=v2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={cn("bg-[#111827] text-white", inter.className)}>
          {children}
        </body>
      </UserProvider>
      {/* getting errors - keep going: https://manage.auth0.com/dashboard/us/dev-flrrksi5yy3p8j14/applications/Nrz2OwNGs657RWtuY4e45kc6hNkxWyWe/quickstart/nextjs  */}
    </html>
  );
}
