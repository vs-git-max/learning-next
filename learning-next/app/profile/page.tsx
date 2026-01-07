"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Profile() {
  const router = useRouter();
  console.log(router);

  function handleNavigate() {
    router.push("/", { scroll: true });
  }

  const pathname = usePathname();

  console.log(pathname);

  const searchParams = useSearchParams();
  console.log(searchParams.get("name"));

  return (
    <div className="">
      <h1 className="">profile components</h1>
      <button onClick={() => handleNavigate()}>Navigate to home page</button>
    </div>
  );
}

export default Profile;
