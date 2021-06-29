import currencies from "../data/supported-currencies.json";

const CurrencySelector = ({ currency, updateCurrency }) => {
  return (
    <div>
      <span>Select Currency: </span>
      <select onChange={(e) => updateCurrency(e.target.value)} value={currency}>
        {currencies.map((cur) => (
          <option key={cur.currency} value={cur.currency}>
            {cur.currency} : {cur.country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
