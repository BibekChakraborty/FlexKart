import React, { useEffect, useState } from "react";
import Footer from "../../Components/footer";
import Nav from "../../Components/nav";
import Link from "next/link";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("/api/product");
    const { result } = await res.json();
    const categories = [...new Set(result.map((e) => e.category))];
    const { category } = router.query;

    if (category)
      categories = categories.filter(
        (e) => e.toLowerCase() === category.toLowerCase()
      );

    setProducts(result);
    setCategories(categories);
  };

  useEffect(() => {
    router.isReady && fetchProducts();
  }, [router]);

  return (
    <>
      <Nav />

      {categories.map((category) => (
        <React.Fragment key={category}>
          <h1 className=" text-center mx-12 font-extrabold text-4xl m-2 mt-8">
            __ {category} __
          </h1>

          <div className="grid grid-cols-4 justify-items-center my-4">
            {products
              .filter((e) => e.category === category)
              .map((product) => (
                <div
                  key={product._id}
                  className="w-[22rem] flex flex-col items-center gap-2  bg-white p-3 rounded-xl shadow-2xl m-2 "
                >
                  <Link href={`/products/${product._id}`}>
                    <img
                      className="w-[20rem] cursor-pointer "
                      src={JSON.parse(product.image)[0]}
                    />
                  </Link>
                  <p className="font-semibold text-center">{product.name}</p>
                  <p className="text-green-500 font-semibold">
                    &#8377;{product.price}
                  </p>
                  <button className="bg-amber-500 text-white p-2 px-3 hover:scale-[1.1] font-semibold rounded-3xl">
                    Buy Now
                  </button>
                </div>
              ))}
          </div>
        </React.Fragment>
      ))}

      <div className="h-24 m-16 p-4 grid place-items-center">
        <h1 className="text-2xl font-extrabold p-2">
          {categories.length > 0
            ? "More Products Coming Soon..."
            : "Oops we don't have this category yet"}
        </h1>
      </div>

      <Footer />
    </>
  );
};

export default Product;
