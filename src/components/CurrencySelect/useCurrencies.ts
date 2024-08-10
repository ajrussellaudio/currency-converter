import { useQuery } from "@tanstack/react-query";

type Currency = {
  id: number;
  name: string;
  short_code: string;
  code: string;
  precision: number;
  subunit: number;
  symbol: string;
  symbol_first: boolean;
  decimal_mark: string;
  thousands_separator: string;
};

type CurrencyResponse = {
  response: Array<Currency>;
};

export function useCurrencies() {
  return useQuery<Currency[]>({
    queryKey: ["currencies"],
    queryFn: async () => {
      const res = await fetch(
        `https://api.currencybeacon.com/v1/currencies?api_key=${import.meta.env.VITE_API_KEY}`,
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const { response } = await (res.json() as Promise<CurrencyResponse>);
      return response;
    },
  });
}
