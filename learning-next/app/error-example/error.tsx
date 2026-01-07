"use client";

import { useRouter } from "next/navigation";

function ErrorMessage() {
  const router = useRouter();

  function handleRefresh() {
    router.refresh();
  }

  return (
    <div className="">
      <h1 className="">This is a very random error</h1>
      <button
        onClick={() => handleRefresh()}
        className="bg-red-600 text-white px-2 py-1"
      >
        Refresh Page
      </button>
    </div>
  );
}

export default ErrorMessage;
