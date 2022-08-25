import React, { useState } from "react";
import Nav from "../Components/nav";
import Image from "next/image";
import landingimg from "../Assets/landingpost.jpg";
import Head from "next/head";
import Link from "next/link";
import Footer from "../Components/footer";
import { useSession } from "next-auth/react";

export default function Home() {
  const data = useSession();

  return (
    <>
      <Nav />
      <div>
        <Image src={landingimg} alt="" />
        <div className="flex flex-col gap-4 justify-center items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="bg-white/50 text-black text-3xl w-[16rem] p-6 text-center font-extrabold rounded-xl">
            __Categories__
          </h1>
          <Link href={"/products?category=Tshirts"}>
            <a className="bg-black/60 hover:scale-[1.1] text-white text-3xl w-[12rem] p-4 py-6 text-center font-bold rounded-xl">
              Tees
            </a>
          </Link>

          <Link href={"/products?category=Lamps"}>
          <a className="bg-black/60 hover:scale-[1.1] text-white text-3xl w-[12rem] p-4 py-6 text-center font-bold rounded-xl">
            Lamps
          </a></Link>

          <Link href={"/products?category=Figurines"}>
          <a className="bg-black/60 hover:scale-[1.1] text-white text-3xl w-[12rem] p-4 py-6 text-center font-bold rounded-xl">
            Figurines
          </a>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
