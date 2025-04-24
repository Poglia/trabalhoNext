"use client";

type Props = {
    params: {
        slug: string[];
    };
};


const Page = ({params}: Props) => {
    return (
        <div>
           FILTROS: {params.slug.join(", ")}
            <br />
        </div>
    );
}

export default Page;