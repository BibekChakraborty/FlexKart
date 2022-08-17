import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between text-white h-[4.8rem] sticky top-0 items-center gap-2 bg-black">
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

        <Link href="/products/">
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
            <i class="fa-solid fa-cart-shopping cursor-pointer"></i>
          </li>
          <li>
            <i class="fa-solid fa-user cursor-pointer"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
