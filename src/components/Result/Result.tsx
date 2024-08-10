import { useConvert } from "./useConvert";

type ResultProps = {
  from?: string;
  to?: string;
  amount?: number;
};

export function Result({ from, to, amount }: ResultProps) {
  const conversion = useConvert({ from, to, amount });

  if (conversion.isLoading) {
    return <span>Loading...</span>;
  }

  if (conversion.isError) {
    return <span>{conversion.error.message}</span>;
  }

  return (
    <>
      <input type="number" readOnly value={conversion.data?.value} />
    </>
  );
}
