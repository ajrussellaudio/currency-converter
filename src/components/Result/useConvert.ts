import { useQuery } from "@tanstack/react-query";

type UseConvertParams = {
  from?: string;
  to?: string;
  amount?: number;
};
type ConversionResponse = {
  value: number;
};

export function useConvert({ from, to, amount }: UseConvertParams) {
  return useQuery({
    queryKey: ["convert", { from, to, amount }],
    queryFn: async () => {
      if (!from || !to || !amount) {
        return null;
      }
      const params = new URLSearchParams({
        from,
        to,
        amount: amount.toString(),
        api_key: import.meta.env.VITE_API_KEY,
      });
      const url = `https://api.currencybeacon.com/v1/convert?${params}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      return res.json() as Promise<ConversionResponse>;
    },
  });
}
