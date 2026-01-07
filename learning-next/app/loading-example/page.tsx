async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    stats: {
      users: 1200,
    },
  };
}

async function LoadingExample() {
  const data = await getData();

  console.log(data);

  return (
    <div className="p-4 ">
      <h1 className="">Loading example</h1>
      <p className="font-bold text-sm"> Users: {data?.stats?.users}</p>
    </div>
  );
}

export default LoadingExample;
