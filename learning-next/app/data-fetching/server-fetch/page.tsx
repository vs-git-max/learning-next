interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

async function getProducts(): Promise<ProductsResponse> {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to get the products");
  }
  return res.json();
}

async function ServerSideFetch() {
  const products = await getProducts();
  console.log(products);

  return (
    <div className="">
      <h1 className="">Server data fetching</h1>
      {products?.products?.map((product) => (
        <div key={product?.id} className="border border-white/30 p-5">
          <h3 className="">{product?.title}</h3>
          <p>{product?.price}</p>
          <p>{product?.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ServerSideFetch;
