import { PropsWithChildren } from "react";

export function Label({ children }: PropsWithChildren) {
  return (
    <label className="input input-bordered flex items-center justify-between gap-2">
      {children}
    </label>
  );
}
