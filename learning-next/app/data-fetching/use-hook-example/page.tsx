import { Suspense } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface UserFetchResponse {
  users: User[];
}

function getUsers(): Promise<UserFetchResponse> {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
}

function UseHook() {
  const usersPromise = getUsers();

  return (
    <div className="">
      <h1>Use Hook example</h1>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </div>
  );
}

export default UseHook;
