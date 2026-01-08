"use client";

import useSWR from "swr";
interface Product {
  title: string;
  price: number;
  category: string;
  id: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SWRExample() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://dummyjson.com/products",
    fetcher,
    {
      revalidateOnFocus: true,
      refreshInterval: 30000,
      errorRetryCount: 3,
    }
  );

  function handleRefresh() {
    mutate();
  }

  if (isLoading) return <h1 className="">Loading...</h1>;
  if (error) return <h1 className="">{error.message}</h1>;

  return (
    <div className="">
      <h1 className="">Swr example</h1>
      <button
        className="bg-white px-2 py-1 text-green-950 font-bold rounded-lg"
        onClick={() => handleRefresh()}
      >
        Refresh
      </button>
      {data?.products?.map((product: Product) => (
        <div key={product?.id} className="border border-white/30 p-5">
          <h3 className="">{product?.title}</h3>
          <p className="">{product?.price}</p>
          <p className="">{product?.category}</p>
        </div>
      ))}
    </div>
  );
}

export default SWRExample;
