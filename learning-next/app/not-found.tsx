"use client";

import { useRouter } from "next/navigation";

function NotFoundPage() {
  const router = useRouter();

  function handleNavigate(place: string) {
    place === "back" ? router.back() : router.push("/");
  }

  return (
    <div className="">
      <h1 className="">This page is not available.</h1>
      <button
        onClick={() => handleNavigate("back")}
        className="px-2 py-1 border-white rounded-lg border"
      >
        Back to the previous page
      </button>
      <button
        onClick={() => handleNavigate("home")}
        className="px-2 py-1 border-white rounded-lg border"
      >
        Home
      </button>
    </div>
  );
}

export default NotFoundPage;
