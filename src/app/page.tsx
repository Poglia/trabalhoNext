
import { Posts } from "@/components/post";
import { PostClient } from "@/components/posts-client";
import { Metadata } from "next";

const Page = () => {
  return (
    <div>
      <h1>Pagina Inicial</h1>

     {/* <Posts /> */}
     <PostClient />
    </div>
  );
}

export default Page;