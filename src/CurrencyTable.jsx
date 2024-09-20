

import React from "react";
import CurrencyRow from "./CurrencyRow";

function CurrencyTable() {
  const currencies = [
    { code: "CAD", exchangeRate: "1.2345", buyRate: "1.26", sellRate: "1.20" },
    {
      code: "IDR",
      exchangeRate: "0.00007",
      buyRate: "0.00008",
      sellRate: "0.00006",
    },
    {
      code: "JPY",
      exchangeRate: "0.0091",
      buyRate: "0.0093",
      sellRate: "0.0089",
    },
    { code: "CHF", exchangeRate: "1.1000", buyRate: "1.12", sellRate: "1.08" },
    { code: "EUR", exchangeRate: "1.1000", buyRate: "1.12", sellRate: "1.08" },
    { code: "GBP", exchangeRate: "1.3000", buyRate: "1.32", sellRate: "1.28" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded shadow-lg">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">We Buy</th>
              <th className="px-4 py-2">Exchange Rate</th>
              <th className="px-4 py-2">We Sell</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map(({ code, exchangeRate, buyRate, sellRate }) => (
              <CurrencyRow
                key={code}
                currency={code}
                exchangeRate={exchangeRate}
                buyRate={buyRate}
                sellRate={sellRate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CurrencyTable;
