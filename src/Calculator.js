import React, { useState } from 'react';

function Calculator() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('gbp');
  const [result, setResult] = useState('');

  const rates = {
    gbp: 0.164,
    eur: 0.192,
    usd: 0.213,
    chf: 0.204
  };

  const calculate = () => {
    const rate = rates[currency] || 0;
    const result = amount * rate;
    setResult(`${amount} ZŁ = ${result.toFixed(2)} ${currency.toUpperCase()}`);
  };

  return (
    <div className="container">
      <h2>Kalkulator walut</h2>
      <div className="input-group">
        <label htmlFor="amount">Kwota w złotówkach (ZŁ):</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Wpisz kwotę"
        />
      </div>
      <div className="input-group">
        <label htmlFor="currency">Wybierz walutę:</label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="gbp">Funty brytyjskie (GBP)</option>
          <option value="eur">Euro (EUR)</option>
          <option value="usd">Dolary amerykańskie (USD)</option>
          <option value="chf">Franki szwajcarskie (CHF)</option>
        </select>
      </div>
      <button className="btn" onClick={calculate}>Przelicz</button>
      {result && <div className="result">{result}</div>}
    </div>
  );
}

export default Calculator;
