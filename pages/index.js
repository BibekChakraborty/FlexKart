import React, { useState } from "react";
import Nav from "../Components/nav";
import Image from "next/image";
import landingimg from "../Assets/landingpost.jpg";
import Head from "next/head";
import Link from "next/link";
import Footer from "../Components/footer";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/97cafe4b3f.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <nav className="flex justify-between text-white h-[4.8rem] items-center gap-2 sticky top-0 bg-black">
        <h1 className="text-3xl font-bold m-3">
          <span>ba</span>
          <span className="text-blue-500">Z</span>
          <span>ar</span>
          <span className="text-blue-500">OO</span>
        </h1>
        <div className="flex gap-7 text-l m-3">
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/products">
            <a>Categories</a>
          </Link>

          <a href="">About Us</a>
        </div>

        <div className="flex item-center ">
          <input
            className="text-xl m-3 p-2 w-75 rounded-3xl text-black outline-none"
            type="search"
            name=""
            id="searchbar"
            placeholder="Search for the item..."
          />
          <ul className="flex gap-4 items-center text-lg m-3">
            <li>
              <i
                class="fa-solid fa-cart-shopping cursor-pointer"
                onClick={() => setShow(true)}
              ></i>
            </li>
            <li>
              <i
                class="fa-solid fa-user cursor-pointer"
                onClick={() => setShow(true)}
              ></i>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <Image src={landingimg} alt="" />
      </div>
      <div className={show ? ` absolute left-[40vw] top-[25vh] ` : `hidden`}>
        <form
          action="#"
          className="flex flex-col text-2xl gap-8 items-center justify-center bg-black text-white m-4 p-8 rounded-2xl relative"
        >
          <i
            class="absolute top-3 cursor-pointer right-4 fa-solid fa-xmark"
            onClick={() => setShow(false)}
          ></i>
          <h1 className="">Login</h1>

          <input
            className="p-1 rounded-xl outline-none text-black"
            type="text"
            name="name"
            id="name"
            placeholder=" UserName..."
          />

          <input
            className="p-1 rounded-xl outline-none text-black"
            type="password"
            name="password"
            id="password"
            placeholder=" Password..."
          />

          <span className="text-sm -m-4 text-blue-600">Forget Password?</span>

          <button className="bg-blue-600 font-semibold p-1 w-full rounded-2xl">
            Log-in
          </button>

          <div className="text-sm">
            <span>Not a member ?</span>
            <span className="text-blue-600 font-semibold"> Sign-up now !!</span>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
