import { useCurrencies } from "./useCurrencies";

export function CurrencySelect() {
  const currencies = useCurrencies();

  return (
    <select>
      {currencies.data?.map((currency) => {
        return (
          <option key={currency.short_code}>
            {currency.name} ({currency.short_code})
          </option>
        );
      })}
    </select>
  );
}
