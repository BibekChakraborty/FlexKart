import React from "react";
import Footer from "../../Components/footer";
import Nav from "../../Components/nav";
import Link from "next/link";
const Product = () => {
  return (
    <>
      <Nav />

      <h1 className=" text-center font-bold text-4xl m-2 mt-8">T-Shirts</h1>
      <div className="grid grid-cols-4 justify-items-center my-4">
        <div className="w-[22rem] flex flex-col items-center gap-2  bg-white p-3 rounded-xl shadow-2xl m-2 ">
          <Link href="/products/id">
            <img
              className="w-[20rem] cursor-pointer"
              src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/7th_hokage1_copy_compressed.jpg"
              alt=""
            />
          </Link>

          <p className="font-semibold">7th Hokage (Half Sleeve)</p>
          <p className="text-green-500 font-semibold">&#8377;699.00</p>
          <button className="bg-orange-500 text-white p-2 px-3 font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
        <div className="w-[22rem] flex flex-col items-center gap-2  bg-white p-3 rounded-xl shadow-2xl m-2 ">
          <img
            className="w-[20rem]"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/7th_hokage1_copy_compressed.jpg"
            alt=""
          />
          <p className="font-semibold">7th Hokage (Half Sleeve)</p>
          <p className="text-green-500 font-semibold">&#8377;699.00</p>
          <button className="bg-orange-500 text-white p-2 px-3 font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
        <div className="w-[22rem] flex flex-col items-center gap-2   bg-white p-3 rounded-xl shadow-2xl m-2">
          <img
            className="w-[20rem]"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/7th_hokage1_copy_compressed.jpg"
            alt=""
          />
          <p className="font-semibold">7th Hokage (Half Sleeve)</p>
          <p className="text-green-500 font-semibold">&#8377;699.00</p>
          <button className="bg-orange-500 text-white p-2 px-3 font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
        <div className="w-[22rem] flex flex-col items-center gap-2   bg-white p-3 rounded-xl shadow-2xl m-2">
          <img
            className="w-[20rem]"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/7th_hokage1_copy_compressed.jpg"
            alt=""
          />
          <p className="font-semibold">7th Hokage (Half Sleeve)</p>
          <p className="text-green-500 font-semibold">&#8377;699.00</p>
          <button className="bg-orange-500 text-white p-2 px-3 font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
      </div>

      <h1 className=" text-center font-bold text-4xl m-6 mt-20">Lamps</h1>
      <div className="grid grid-cols-4 justify-items-center my-4">
        <div className="w-[20rem] flex flex-col items-center text-center gap-2 bg-white p-2 rounded-xl shadow-2xl m-2 ">
          <img
            className="w-[20rem] rounded-xl"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/goku_powering_3dled_lampa_comicsense.jpg"
            alt=""
          />
          <p className="font-semibold">
            Goku Powering Up Led Night Lamp (Multi Color)
          </p>
          <p className="text-green-500 font-semibold">&#8377;2000.00</p>
          <button className="bg-purple-800 my-2 text-white p-2 px-3 font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
        <div className="w-[20rem] flex flex-col items-center gap-2 text-center bg-white p-2 rounded-xl shadow-2xl m-2 ">
          <img
            className="w-[20rem] rounded-xl"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/goku_powering_3dled_lampa_comicsense.jpg"
            alt=""
          />
          <p className="font-semibold">
            Goku Powering Up Led Night Lamp (Multi Color)
          </p>
          <p className="text-green-500 font-semibold">&#8377;2000.00</p>
          <button className="bg-purple-800 my-2 text-white p-2 px-3 font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
        <div className="w-[20rem] flex flex-col items-center gap-2 text-center bg-white p-2 rounded-xl shadow-2xl m-2 ">
          <img
            className="w-[20rem] rounded-xl"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/goku_powering_3dled_lampa_comicsense.jpg"
            alt=""
          />
          <p className="font-semibold">
            Goku Powering Up Led Night Lamp (Multi Color)
          </p>
          <p className="text-green-500 font-semibold">&#8377;2000.00</p>
          <button className="bg-purple-800 my-2 text-white p-2 px-3 font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
        <div className="w-[20rem] flex flex-col items-center gap-2 text-center bg-white p-2 rounded-xl shadow-2xl m-2 ">
          <img
            className="w-[20rem] rounded-xl"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/goku_powering_3dled_lampa_comicsense.jpg"
            alt=""
          />
          <p className="font-semibold">
            Goku Powering Up Led Night Lamp (Multi Color)
          </p>
          <p className="text-green-500 font-semibold">&#8377;2000.00</p>
          <button className="bg-purple-800 my-2 text-white p-2 px-3  font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
      </div>

      <h1 className=" text-center font-bold text-4xl m-6 mt-20">Figurines</h1>
      <div className="grid grid-cols-4 justify-items-center my-4">
        <div className="w-[20rem] flex flex-col items-center gap-2 text-center bg-white p-2 rounded-xl shadow-2xl m-2 ">
          <img
            className="w-[20rem] rounded-xl"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/zenitsu_bobble_head3_comicsense.jpg"
            alt=""
          />
          <p className="font-semibold">Zenitsu Bobble Head (Mobile Holder)</p>
          <p className="text-green-500 font-semibold">&#8377;699.00</p>
          <button className="bg-amber-400 my-2 text-black p-2 px-3 font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
        <div className="w-[20rem] flex flex-col items-center gap-2 text-center bg-white p-2 rounded-xl shadow-2xl m-2 ">
          <img
            className="w-[20rem] rounded-xl"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/zenitsu_bobble_head3_comicsense.jpg"
            alt=""
          />
          <p className="font-semibold">Zenitsu Bobble Head (Mobile Holder)</p>
          <p className="text-green-500 font-semibold">&#8377;699.00</p>
          <button className="bg-amber-400 my-2 text-black p-2 px-3 font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
        <div className="w-[20rem] flex flex-col items-center gap-2 text-center bg-white p-2 rounded-xl shadow-2xl m-2 ">
          <img
            className="w-[20rem] rounded-xl"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/zenitsu_bobble_head3_comicsense.jpg"
            alt=""
          />
          <p className="font-semibold">Zenitsu Bobble Head (Mobile Holder)</p>
          <p className="text-green-500 font-semibold">&#8377;699.00</p>
          <button className="bg-amber-400 my-2 text-black p-2 px-3 font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
        <div className="w-[20rem] flex flex-col items-center gap-2 text-center bg-white p-2 rounded-xl shadow-2xl m-2 ">
          <img
            className="w-[20rem] rounded-xl"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/zenitsu_bobble_head3_comicsense.jpg"
            alt=""
          />
          <p className="font-semibold">Zenitsu Bobble Head (Mobile Holder)</p>
          <p className="text-green-500 font-semibold">&#8377;699.00</p>
          <button className="bg-amber-400 my-2 text-black p-2 px-3 font-semibold rounded-3xl">
            Buy Now
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
