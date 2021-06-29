import React, {useState} from 'react';
import CurrencySelector from './components/CurrencySelector';
import BitcoinData from './components/BitcoinData';


function App() {
  const [currency, setCurrency] = useState("AUD")

  const updateCurrency = (curr) => {
    if (curr.length === 3){
      setCurrency(curr)
      console.log(`Currency Updated`)
    }else{
      console.log(`Invalid currency`)
    }
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Bitcoin Index</h1>
      <CurrencySelector {...{currency, updateCurrency}} />
      <BitcoinData {...{currency}}/>
    </div>
  );
}

export default App;
