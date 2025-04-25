"use client";

import { getPosts } from "@/actions/get-posts";
import { Post } from "@/types/Post";
import { use, useEffect, useState } from "react";

export const PostClient = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "force-cache", next: { revalidate: 3600 }});

    //  const data = await getPosts();
    
    const data: Post[] = await res.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
