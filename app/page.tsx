import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-8xl mb-4">Daniel Ha 😍</h1>
        <Image src="/daniel.png" alt="daniel" width={400} height={400}></Image>
      </div>
    </>
  );
}
