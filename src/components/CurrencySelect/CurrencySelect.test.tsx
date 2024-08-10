import { http, HttpResponse } from "msw";
import { server } from "../../mocks/node";
import { CurrencySelect } from "./CurrencySelect";
import { render, screen } from "@testing-library/react";
import { MockQueryClientProvider } from "../../mocks/MockQueryClientProvider";

function renderComponent() {
  return render(
    <MockQueryClientProvider>
      <CurrencySelect />
    </MockQueryClientProvider>,
  );
}

const MOCK_API_RESPONSE = {
  response: [
    {
      id: 147,
      name: "US Dollar",
      short_code: "USD",
      code: "840",
      precision: 2,
      subunit: 100,
      symbol: "$",
      symbol_first: true,
      decimal_mark: ".",
      thousands_separator: ",",
    },
    {
      id: 46,
      name: "Euro",
      short_code: "EUR",
      code: "978",
      precision: 2,
      subunit: 100,
      symbol: "€",
      symbol_first: true,
      decimal_mark: ",",
      thousands_separator: ".",
    },
  ],
};

describe("CurrencySelect", () => {
  it("provides a sorted list of currencies available on the API", async () => {
    server.use(
      http.get("https://api.currencybeacon.com/v1/currencies", () => {
        return HttpResponse.json(MOCK_API_RESPONSE);
      }),
    );
    renderComponent();
    const options = await screen.findAllByRole("option");
    expect(options).toHaveLength(MOCK_API_RESPONSE.response.length);
    expect(options[0]).toHaveTextContent("EUR (Euro)");
    expect(options[1]).toHaveTextContent("USD (US Dollar)");
  });
});
