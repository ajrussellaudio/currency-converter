import { useState } from "react";
import { CurrencySelect } from "./components/CurrencySelect";
import { AmountInput } from "./components/AmountInput";
import { Result } from "./components/Result";
import { Label } from "./components/Label/Label";

function App() {
  const [fromCurrency, setFromCurrency] = useState("GBP");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);

  return (
    <main className="grid grid-cols-2 gap-4 w-3/4 m-auto mt-4">
      <Label>
        From
        <CurrencySelect value={fromCurrency} onChange={setFromCurrency} />
      </Label>
      <Label>
        Amount
        <AmountInput value={amount} onChange={setAmount} />
      </Label>
      <Label>
        To
        <CurrencySelect value={toCurrency} onChange={setToCurrency} />
      </Label>
      <Label>
        Result
        <Result from={fromCurrency} to={toCurrency} amount={amount} />
      </Label>
    </main>
  );
}

export default App;
