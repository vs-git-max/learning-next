async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log(slug);
  return (
    <div className="">
      <h1 className="">Products details</h1>
    </div>
  );
}

export default ProductDetails;
