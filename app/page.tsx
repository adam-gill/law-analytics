import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <Image className="rounded-sm mt-4" src="/fenix.png" alt="daniel" width={400} height={400}></Image>
      </div>
    </>
  );
}
