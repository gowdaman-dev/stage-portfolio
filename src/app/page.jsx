import React from "react";
import { Open_Sans } from "next/font/google";

export const SansFont = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

function page() {
  return (
    <main className="h-screen min-w-screen bg-black bg-blue-50">
      <section className="hero h-screen w-screen p-[2rem] flex flex-col gap-4">
        <div className="grid grid-cols-5 grid-row-2 w-full h-full gap-4">
          <div
            className={
              "${SansFont.className} bg-white shadow space-y-6 rounded-[20px] col-span-2 p-4 text-4xl font-semibold"
            }
          >
            <h1 className="text-[3rem] text-zinc-300">Full Stack</h1>
            <h1 className="text-[5rem] text-zinc-300">Developer</h1>
          </div>
          <div className="bg-white shadow rounded-[20px]  col-span-1 "></div>
          <div className="bg-white shadow rounded-[20px] col-span-2 p-4">
            <p>
              Delhi-based graphic designer specializing in creating engaging
              social media content and eye- catching print designs
            </p>
          </div>
          <div className="bg-white shadow rounded-[20px] col-span-2"></div>
          <div className="bg-white shadow rounded-[20px] col-span-2"></div>
          <div className="bg-white shadow rounded-[20px] col-span-1"></div>
        </div>
      </section>
    </main>
  );
}

export default page;
