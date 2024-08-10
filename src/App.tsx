import { useState } from "react";
import { CurrencySelect } from "./components/CurrencySelect";
import { AmountInput } from "./components/AmountInput";
import { Result } from "./components/Result";

function App() {
  const [fromCurrency, setFromCurrency] = useState("GBP");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);

  return (
    <>
      <label>
        Amount
        <AmountInput value={amount} onChange={setAmount} />
      </label>
      <label>
        From
        <CurrencySelect value={fromCurrency} onChange={setFromCurrency} />
      </label>
      <label>
        To
        <CurrencySelect value={toCurrency} onChange={setToCurrency} />
      </label>
      <label>
        Result
        <Result from={fromCurrency} to={toCurrency} amount={amount} />
      </label>
    </>
  );
}

export default App;
