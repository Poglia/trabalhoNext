"use client";

type Props = {
  params: {
    id: string;
    action: string;
  };
};
const Page = ({ params }: Props) => {
  return (
    <div>
      <h1>
        Blog id: {params.id} action: {params.action}
      </h1>
    </div>
  );
};

export default Page;
