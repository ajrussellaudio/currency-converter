import { http, HttpResponse } from "msw";
import { server } from "../../mocks/node";
import { Result } from "./Result";
import { render, screen } from "@testing-library/react";
import { MockQueryClientProvider } from "../../mocks/MockQueryClientProvider";
import { ComponentProps } from "react";

function renderComponent(props: Partial<ComponentProps<typeof Result>>) {
  return render(
    <MockQueryClientProvider>
      <Result {...props} />
    </MockQueryClientProvider>,
  );
}

describe("Result", () => {
  beforeEach(() => {
    server.use(
      http.get("https://api.currencybeacon.com/v1/convert", ({ request }) => {
        const url = new URL(request.url);

        const amount = url.searchParams.get("amount");

        if (!amount) {
          return new HttpResponse(null, { status: 400 });
        }

        return HttpResponse.json({ value: Number(amount) * 3 });
      }),
    );
  });
  it("sends the parameters to the API and displays the result", async () => {
    renderComponent({ from: "EUR", to: "USD", amount: 100 });
    expect(await screen.findByRole("spinbutton")).toHaveDisplayValue("300");
  });

  describe("displays no result for missing parameters", () => {
    test("missing from value", async () => {
      renderComponent({ to: "USD", amount: 100 });
      expect(await screen.findByRole("spinbutton")).toHaveDisplayValue("");
    });

    test("missing to value", async () => {
      renderComponent({ from: "EUR", amount: 100 });
      expect(await screen.findByRole("spinbutton")).toHaveDisplayValue("");
    });

    test("missing amount", async () => {
      renderComponent({ from: "EUR", to: "USD" });
      expect(await screen.findByRole("spinbutton")).toHaveDisplayValue("");
    });
  });
});
