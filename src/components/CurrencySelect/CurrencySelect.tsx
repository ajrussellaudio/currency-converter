import { useCurrencies } from "./useCurrencies";

type CurrencySelectProps = {
  value: string;
  onChange: (currencyCode: string) => void;
};

export function CurrencySelect({ value, onChange }: CurrencySelectProps) {
  const currencies = useCurrencies();

  return (
    <select value={value} onChange={(e) => onChange(e.currentTarget.value)}>
      {currencies.data?.map((currency) => {
        return (
          <option key={currency.short_code} value={currency.short_code}>
            {currency.short_code} ({currency.name})
          </option>
        );
      })}
    </select>
  );
}
