async function ProductsFilter({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  console.log(slug);

  return (
    <div>
      <h1 className="">Products filter</h1>
    </div>
  );
}

export default ProductsFilter;
