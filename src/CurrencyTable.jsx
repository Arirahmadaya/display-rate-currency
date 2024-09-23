import React, { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow";

function CurrencyTable() {
  const [rates, setRates] = useState({});
  const currencies = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY; 
        const response = await fetch(
          `https://api.currencyfreaks.com/latest?apikey=${apiKey}`
        );
        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        console.error("Error fetching the exchange rates:", error);
      }
    };

    fetchRates();
  }, []);

  const calculateBuySellRates = (rate) => {
    const buyRate = (rate * 1.02).toFixed(4);
    const sellRate = (rate * 0.98).toFixed(4);
    return { buyRate, sellRate };
  };

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
            {currencies.map((currency) => {
              const rate = rates[currency];
              if (!rate) return null;
              const { buyRate, sellRate } = calculateBuySellRates(rate);

              return (
                <CurrencyRow
                  key={currency}
                  currency={currency}
                  buyRate={buyRate}
                  exchangeRate={parseFloat(rate).toFixed(4)}
                  sellRate={sellRate}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CurrencyTable;
