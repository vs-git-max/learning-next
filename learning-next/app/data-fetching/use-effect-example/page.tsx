"use client";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

function UseEffectExample() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<Product[]>([]);

  async function fetchAListOfProducts() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products", {
        cache: "force-cache",
      });
      const result = await res.json();
      if (result) {
        setLoading(false);
        setData(result?.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAListOfProducts();
  }, []);

  if (loading) return <h1 className="">Loading...</h1>;

  return (
    <div className="">
      <h1 className="">Use effect example</h1>
      {data.map((product) => (
        <div key={product?.id} className="border border-white/30 p-5">
          <h3 className="">{product?.title}</h3>
          <p className="">{product?.price}</p>
          <p className="">{product?.category}</p>
        </div>
      ))}
    </div>
  );
}

export default UseEffectExample;
