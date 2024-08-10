type AmountInputProps = {
  value: number;
  onChange: (amount: number) => void;
};

export function AmountInput({ value, onChange }: AmountInputProps) {
  return (
    <input
      type="number"
      id="amount"
      value={value}
      onChange={(e) => onChange(Number(e.currentTarget.value))}
    />
  );
}
