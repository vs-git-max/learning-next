import Link from "next/link";

function Products() {
  const products = [
    { id: "1", name: "Mobile", price: 500 },
    { id: "2", name: "Watch", price: 720 },
    { id: "3", name: "Laptop", price: 4300 },
  ];

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <div className="border p-4 rounded" key={product?.id}>
            <h2 className="">{product?.name}</h2>
            <p className="">${product?.price}</p>
            <Link href={`/products/${product?.name}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
