import Link from "next/link";
import React from "react";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <nav className="w-screen border p-2 flex items-center text-sm text-gray-500 justify-between">
      <div className="logo flex p-2 text-zinc-600 h-10 w-10 text-center justify-center items-center">
        <h1 className="text-xl font-bold h-fit w-fit">G</h1>
      </div>
      <div className="nav space-x-4">
        <Link className="p-2" href={"/"}>
          Home
        </Link>
        <Link className="p-2" href={"/"}>
          About
        </Link>
        <Link className="p-2" href={"/"}>
          Works
        </Link>
        <Link className="p-2" href={"/"}>
          Testimonials
        </Link>
        <Link className="p-2" href={"/"}>
          contact
        </Link>
      </div>
      <div className="logs flex items-center justify-center space-x-4">
        <button className="border px-4 bg-black text-zinc-200 py-1">
          Let's Connect
        </button>
        <button className="border border-black px-4 text-black py-1">
          Login
        </button>
      </div>
    </nav>
  );
};
