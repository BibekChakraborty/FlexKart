import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [count, setCount] = useState(1);
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/97cafe4b3f.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <nav className="flex justify-between text-white h-[4.8rem] items-center gap-2 sticky top-0 z-10 bg-black">
        <h1 className="text-3xl font-bold m-3 font-serif">
          <span>Fle</span>
          <span className="text-blue-500">x</span>
          <span>Kar</span>
          <span className="text-blue-500">t🉐</span>
          
        </h1>
        <div className="flex gap-7 text-l m-3">
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/products">
            <a>All Products</a>
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
          <ul className="flex gap-4 items-center text-lg m-3 mr-4">
            <li>
              <i
                className="fa-solid fa-user cursor-pointer"
                onClick={() => {
                  if (session) {
                    setCount(count + 1);
                    console.log(count);
                    if (count % 2 != 0) setShow2(true);
                    else setShow2(false);
                  } else {
                    signIn();
                  }
                }}
              ></i>
            </li>
            <li>
              <i
                className="fa-solid fa-cart-shopping cursor-pointer"
                onClick={() => {
                  if (session) {
                    setCount(count + 1);
                    console.log(count);
                    if (count % 2 != 0) setShow2(true);
                    else setShow2(false);
                  } else {
                    signIn();
                  }
                }}
                  
              ></i>
            </li>
          </ul>
        </div>
      </nav>

      {/*profile and logout*/}
      <div
        className={
          show2
            ? `w-36 rounded-lg fixed top-20 right-8 border border-gray-400 z-10 p-4 bg-black gap-2 text-white font-semibold flex flex-col justify-start items-start`
            : `hidden`
        }
      >
        <Link href="/profile">
          <button className=" rounded-lg border px-2 py-1 border-gray-400 w-full hover:scale-[1.1]">
            Profile
          </button>
        </Link>
        <button
          className=" rounded-lg border px-2 py-1 border-gray-400 w-full hover:scale-[1.1]"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </button>
      </div>



      {/*login Popup*/}
      <div
        className={show ? ` z-10 absolute left-[40vw] top-[25vh] ` : `hidden`}
      >
        <form
          action="#"
          className="flex flex-col text-2xl gap-8 items-center justify-center bg-black text-white m-4 p-8 rounded-2xl relative"
        >
          <i
            className="absolute top-3 cursor-pointer right-4 fa-solid fa-xmark"
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
    </>
  );
};

export default Nav;
