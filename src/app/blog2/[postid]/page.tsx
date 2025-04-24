import { Post } from "@/types/Post";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
  };

type Props = {
    params: {
        postid: string;
    };  
}
const Page = async({ params }: Props) => {

    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);
    const post: Post = await postResponse.json();

    if (!post.id) {
        return <div>Post não Encontrado</div>;
    }

    return (
        <div className="text-center">
            <div>ID do post: {params.postid}</div>
            <h1 className="text-3xl my-3 uppercase">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}   

export default Page;