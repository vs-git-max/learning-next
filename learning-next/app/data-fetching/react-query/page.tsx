"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostResponse {
  post: Post[];
  total: number;
}

function ReactQuery() {
  //also called the tanstack query

  const queryClient = useQueryClient();
  const { error, data, isLoading, refetch } = useQuery<PostResponse>({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/posts");

      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      return res.json();
    },

    staleTime: 2 * 60 * 1000,
  });
  console.log(queryClient);
  console.log("Data", data);

  if (isLoading) return <h1 className="">Loading...</h1>;
  if (error) return <h1 className="">{error.message}</h1>;

  return (
    <div className="">
      <h1 className="">React Query example</h1>
    </div>
  );
}

export default ReactQuery;
