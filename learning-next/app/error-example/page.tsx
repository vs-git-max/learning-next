async function getProducts() {
  const shouldError = Math.random() > 0.5;

  if (shouldError) throw new Error("Failed to fetch products");

  return [
    {
      id: 1,
      name: "One",
    },
    {
      id: 2,
      name: "Two",
    },
    {
      id: 3,
      name: "Three",
    },
  ];
}

async function ErrorHanding() {
  const products = await getProducts();

  return (
    <div className="p-4">
      <div className="grid gap-4">
        {products?.map((product) => (
          <div key={product?.id}>
            <h1 className="">Product {product?.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ErrorHanding;
