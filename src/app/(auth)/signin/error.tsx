"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};
export default function Error({ error, reset }: Props) {

    const handleTryAgain = () => {
        reset();
    }

  return (
    <div className="text-center">
      <div className=" text-red-500">
        <h2 className="text-2xl">Aconteceu algum erro</h2>
        <p>{error.message}</p>
      </div>
      <button onClick={handleTryAgain}>Tentar novamente</button>
    </div>
  );
}
