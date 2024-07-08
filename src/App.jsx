import { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Homepage from "./Components/Homepage/Homepage";
import InputField from "./Components/InputField/InputField";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
 

  async function fetchData() {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=${
        import.meta.env.VITE_API_KEY
      }`;

      const res = await fetch(url);
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
      console.log("this is cryptoData array", data); 
    });
  }, []);

  

  return (
    <>
      <div className="app-container">
        <NavigationBar />
        <InputField cryptoData={cryptoData} />
        <Container fluid className="gradient-background">
          <Homepage cryptoData={cryptoData} />
        </Container>
      </div>
    </>
  );
}

export default App;
