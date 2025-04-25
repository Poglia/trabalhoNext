"use server"

import { Post } from "@/types/Post";

export const getPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts: Post[] = await response.json();

      return posts;
    
}