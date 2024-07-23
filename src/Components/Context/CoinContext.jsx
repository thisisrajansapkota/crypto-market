import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const [coinData, setCoinData] = useState([]);
  const [coinClicked, setCoinClicked] = useState(false);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const contextValue = {
    cryptoData,
    filteredData,
    searchTerm,
    setSearchTerm,
    currency,
    setCurrency,
    coinData,
    setCoinData,
    coinClicked,
    setCoinClicked,
     fetchData,
  };

  async function fetchData() {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
        currency.name
      }&x_cg_demo_api_key=${import.meta.env.VITE_API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();
      console.log("Data parsed:", data);
      setCryptoData(data);
      return data;
    } catch (err) {
      console.log("Error occurred:", err);
    }
  }

   

  useEffect(() => {
    fetchData();
  }, [currency]);

  useEffect(() => {
    const filteredCoin = cryptoData.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredCoin);
  }, [cryptoData, searchTerm]);




  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
