import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <Image className="rounded-sm mt-4" src="/fenix.png" alt="daniel" width={400} height={400}></Image>
        <h1 className="text-5xl max-w-[600px] text-center lh mt-4">Cutting-Edge Law Firm Embedded Analytics at Your Fingertips.</h1>
        <Button className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-300 text-[#111827] text-2xl p-10 mt-12 rounded-full btn-hover">Get Started Now.</Button>
      </div>
    </>
  );
}
