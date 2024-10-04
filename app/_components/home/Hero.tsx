import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <main className="w-screen min-h-screen flex px-10">
      <div className="min-h-screen flex w-full py-4 items-start justify-center flex-col">
        <div className="border px-2 rounded-full w-fit">Let's Connect</div>
        <div className="title">
          <h2 className="text-4xl font-semibold">Welcome To My Portfolio,</h2>
          <h1 className="text-4xl font-semibold">I'm Gowdaman</h1>
        </div>
      </div>
      <div className="min-h-full w-full
        flex items-center justify-center
      ">
        <Image alt="" src={"/"} height={500} width={400} className="border" />
      </div>
    </main>
  );
}
