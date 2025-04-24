"use client";

type Props = {
  params: {
    id: string;
  };
}
const Page = ({params}: Props) => {
  return (
    <div>
      <h1>Pagina do blog {params.id}</h1>
    </div>
  );
}

export default Page;