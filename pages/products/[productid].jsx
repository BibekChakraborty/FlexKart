import { useEffect, useRef, useState } from "react";
import Nav from "../../Components/nav";
import Footer from "../../Components/footer";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";

const Items = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const imageRef = useRef();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [carttext, setCarttext] = useState("Add to Cart");
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    console.log(count);
    if (count % 2 != 0) setCarttext("Remove");
    else setCarttext("Add to Cart");
  }, [count]);

  if (!data) return null;

  if (data.error) return <div>{data.message}</div>;

  return (
    <>
      <Nav />
      <div className="flex items-center ">
        <div className="w-[40rem] m-12 p-4 flex flex-col items-center gap-3 ">
          <img
            className="w-[20rem] m-4 rounded-xl shadow-xl"
            src={data.image[0]}
            ref={imageRef}
            alt=""
          />

          <div className="flex items-center justify-center gap-4">
            {data.image.map((img, i) => (
              <img
                key={i}
                className="w-[10%] rounded-lg cursor-pointer hover:scale-[1.1]"
                onClick={() => (imageRef.current.src = img)}
                src={img}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-start  w-[50rem] p-8">
          <h1 className="m-2 text-3xl font-semibold">{data.name}</h1>
          <p className=" m-2 text-xl font-bold text-red-700">
            &#8377;{data.price}
          </p>
          <div>
            <h1 className="text-2xl font-bold m-2">Product Description</h1>
            <ul className="text-xl font-semibold list-disc m-4 px-4 ">
              {data.description.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
          <div className="text-2xl font-bold m-1 p-2 w-[60%]  ">
            <button
              className="p-2 px-4 bg-green-500 rounded-xl"
              onClick={() => {
                if (quantity <= 0) {
                  setQuantity(0);
                } else {
                  setQuantity(quantity - 1);
                }
              }}
            >
              -
            </button>
            <span className="p-2 px-4 ">{quantity}</span>
            <button
              className="p-2 px-4 bg-green-500 rounded-xl"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <span className="p-2 px-4 text-red-700">
              &#8377; {data.price * quantity}
            </span>
          </div>

          <div className=" m-2 flex gap-4 mb-12">
            <button
              className="bg-orange-600 text-xl text-white font-semibold p-2 rounded-lg hover:scale-[1.1]"
              onClick={() => setCount(count + 1)}
            >
              {carttext}
            </button>
            <button
              className="bg-green-700 text-xl text-white font-semibold p-2 rounded-lg hover:scale-[1.1]"
              onClick={() => {
                if (session) {
                  if (quantity === 0) return alert("quantity cannot be 0");
                  router.push(
                    `/products/checkout?productid=${router.query.productid}&quantity=${quantity}`
                  );
                } else {
                  signIn();
                }
              }}
            >
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
