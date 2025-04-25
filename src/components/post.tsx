import { getPosts } from "@/actions/get-posts";
import { Post } from "@/types/Post";

export const Posts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    // getPosts();
    
    return (
      <ul>
        {posts.map(item => (
          <li key={item.id}>{item.title}</li>)
        )}
        
      </ul>
    );
}
