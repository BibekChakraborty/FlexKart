import React, { useEffect, useState } from "react";
import Nav from "../../Components/nav";
import Footer from "../../Components/footer";
import { useRouter } from "next/router";

const Checkout = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [buy, setBuy] = useState(true);

  const fetchData = async () => {
    const res = await fetch(`/api/product/${router.query.productid}`);
    const data = await res.json();

    if (res.status !== 200) return setData({ ...data, error: true });

    data.image = JSON.parse(data.image);
    data.description = JSON.parse(data.description);

    setData(data);
  };

  useEffect(() => {
    router.isReady && fetchData();
  }, [router]);

  if (!data) return null;

  return (
    <>
      <Nav />

      <div
        className={
          buy
            ? `hidden`
            : `bg-slate-200 grid place-items-center m-auto my-8 p-8 w-[60%] gap-2 rounded-lg text-2xl font-bold text-green-800`
        }
      >
        Order Placed Successfully.
      </div>

      <div
        className={
          buy
            ? `bg-slate-200 grid place-items-center m-auto my-8 p-8 w-[60%] gap-2 rounded-lg`
            : `hidden`
        }
      >
        <h1 className="m-2 p-2 text-2xl font-bold place-items-start text-center">
          Fill up the Shipping Details for {data.name}
        </h1>
        <div className="flex gap-1">
          <input
            className="w-[25rem] rounded-lg border-black border text-xl p-1 placeholder:px-2"
            placeholder="Full name "
            type="text"
            name="name"
            id="name"
          />
          <input
            className="w-[25rem] rounded-lg border-black border text-xl p-1 placeholder:px-2"
            placeholder="Mobile Number "
            type="number"
            name=""
            id=""
          />
        </div>
        <input
          className="w-[50rem] rounded-lg border-black border text-xl p-1 placeholder:px-2 "
          placeholder="Street/Area/Locality"
          type="text"
          name="address"
          id="address"
        />
        <div className="flex justify-evenly gap-2">
          <input
            className="w-[17rem] rounded-lg border-black border text-xl p-1 placeholder:pxbuysetOrderbuy(false)-2"
            placeholder="City"
            type="text"
            name="city"
            id="city"
          />
          <input
            className="w-[16rem] rounded-lg border-black border text-xl p-1 placeholder:px-2"
            placeholder="State"
            type="text"
            name="state"
            id="state"
          />
          <input
            className="w-[16rem] rounded-lg border-black border text-xl p-1 placeholder:px-2"
            placeholder="PinCode"
            type="number"
            name="pin"
            id="pin"
          />
        </div>
        <div className="w-[50rem] flex justify-between p-4">
          <h1 className="text-xl font-semibold">
            Payment Method: <span className="text-red-800 font-bold">COD</span>
          </h1>
          <div className="text-xl font-semibold w-60 ">
            <h5 className="float-right text-green-700 font-bold">
              &#8377; {data.price * router.query.quantity}
            </h5>
            <h5>Cart Total: </h5>
            <h5 className="float-right text-green-700 font-bold">
              &#8377; {data.price * router.query.quantity}
            </h5>
            <h5>Total Payable: </h5>
          </div>
        </div>
        <button
          className="bg-green-700 active:bg-green-600 place-self-end rounded-lg text-white p-3 text-xl font-semibold hover:scale-110"
          onClick={() => setBuy(false)}
        >
          Proceed to Checkout
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
