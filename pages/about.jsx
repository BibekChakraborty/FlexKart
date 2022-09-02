import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/footer";
import me from "../Assets/aboutme.jpg";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Nav />
      <div className="grid place-items-center text-center">
        <div className="bg-slate-900 text-white rounded-xl m-8 p-8">
          <div className="w-72 rounded-full">
            <Image className="rounded-full" src={me} alt="" />
          </div>
          <h1 className="font-bold text-2xl m-2">Bibek Chakraborty</h1>
          <h3 className="font-bold text-xl m-2 text-blue-400">
            Fullstack Web Developer
          </h3>
          <div className="flex justify-center text-2xl m-4 items-center gap-4">
            <a href="https://www.instagram.com/_b.i.b.e.k._/" target="_blank" without rel="noreferrer">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/BibekChakraborty" target="_blank" without rel="noreferrer">
            <i class="fa-brands fa-github"></i>
            </a>
            <a href="mailto:bibekbibek0612@gmail.com" target="_blank" without rel="noreferrer">
            <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default about;
