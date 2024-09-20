

import React from 'react';

const CurrencyRow = ({ currency, exchangeRate, buyRate, sellRate   }) => {
  return (
    <tr className="bg-orange-50">
      <td className="border px-4 py-2">{currency}</td>
      <td className="border px-4 py-2">{buyRate}</td>
      <td className="border px-4 py-2">{exchangeRate}</td>
      <td className="border px-4 py-2">{sellRate}</td>
    </tr>
  );
};


export default CurrencyRow;

