import React, { useRef } from "react";
import Nav from "../../Components/nav";
import Footer from "../../Components/footer";
import { useRouter } from "next/router";
import Image from "next/image";

const imgc = [
  "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/7th_hokage1_copy_compressed.jpg",
  "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/7th_hokage2_copy_compressed.jpg",
  "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/7th_hokage3_compressed.jpg",
  "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/7th_hokage4_compressed.jpg",
];

const Items = () => {

  const imageRef=useRef();
  
  return (
    <>
      <Nav />
      <div className="flex items-center h-[90vh] ">
        <div className="w-[40rem] m-8 p-4 flex flex-col items-center gap-3 ">
          <img
            className="w-[20rem] m-4 rounded-xl shadow-xl"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/7th_hokage1_copy_compressed.jpg"
            ref={imageRef}
            alt=""
          />

          <div className="flex items-center justify-center gap-4">
            {imgc.map((data) => (
              <img
                className="w-[10%] rounded-lg cursor-pointer hover:scale-[1.1]"
                onClick={()=>imageRef.current.src=data}
                src={data}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-start  w-[50rem] p-8">
          <h1 className="m-2 text-3xl font-semibold">
            7th Hokage (Half sleeve)
          </h1>
          <p className=" m-2 text-xl font-bold text-red-700">&#8377;699.00</p>
          <div>
            <h1 className="text-2xl font-bold m-2">Product Description</h1>
            <ul className="text-xl font-semibold list-disc m-4 px-4 ">
              <li>180 GSM, 100% Cotton, Pre-Shrunk &amp; Bio-Washed Fabric</li>
              <li>Screen Printed</li>
              <li>Regular Fit</li>
              <li>
                Colors may vary due to photography and your screen setting
              </li>
            </ul>
          </div>
          <div className=" m-2 flex gap-4">
            <button className="bg-orange-600 text-xl text-white font-semibold p-2 rounded-lg hover:scale-[1.1]">
              Add to Cart
            </button>
            <button className="bg-green-700 text-xl text-white font-semibold p-2 rounded-lg hover:scale-[1.1]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Items;
