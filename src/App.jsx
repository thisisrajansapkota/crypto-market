import { useEffect, useState } from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Homepage from "./Components/Homepage/Homepage";
import { Container } from "react-bootstrap";

function App() {
  const [cryptoData, setCryptoData] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-XfxV1iM8BSkozxBHm943FbwU"

        // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&x_cg_demo_api_key=CG-XfxV1iM8BSkozxBHm943FbwU"
        // "https://api.coingecko.com/api/v3/search/trending&api_key=CG-XfxV1iM8BSkozxBHm943FbwU"
      );
      const data = await res.json();
      console.log("Data parsed:", data);
      return data;
    } catch (err) {
      console.log("Error occurred:", err);
    }
  }

  useEffect(() => {
    fetchData().then((data) => {
      setCryptoData(data);
      console.log( "this is cryptoData array" , cryptoData);
      // console.log([object])

    });
  }, []);

  return (
    <>
      <div className="app-container">
        <NavigationBar />

        <Container fluid className="gradient-background">
          <Homepage cryptoData={cryptoData} />
        </Container>
        {/* Normal div */}
        {/* <div>
          <h2>{cryptoData[0].name}</h2>
          <p>Symbol: {cryptoData[0].symbol.toUpperCase()}</p>
          <p>Current Price: ${cryptoData[0].current_price}</p>
          <p>Market Cap: ${cryptoData[0].market_cap}</p>
          <img src={cryptoData[0].image} alt={cryptoData[0].name} width="100" height="100" />
        </div> */}
      </div>
    </>
  );
}

export default App;
