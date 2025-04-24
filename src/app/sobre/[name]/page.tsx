"use client";

type Props = {
  params: {
    name: string;
  };
}
const Page = ({params}: Props) => {
  return (
    <div>
      <h1>Pagina sobre {params.name}</h1>
    </div>
  );
}

export default Page;