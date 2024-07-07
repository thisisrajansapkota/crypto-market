import { useEffect, useState } from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Homepage from "./Components/Homepage/Homepage";
import { Container } from "react-bootstrap";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [landingPage, setLandingPage] = useState(true);

  async function fetchData() {
    try {

    

      const res = await fetch(

        landingPage === true ? (

        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=${import.meta.env.VITE_API_KEY}`

      
       )  : (
         `https://api.coingecko.com/api/v3/coins/{id}?vs_currency=usd&x_cg_demo_api_key=${import.meta.env.VITE_API_KEY}`

       ))
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
      console.log("this is cryptoData array", cryptoData);
      // console.log([object])
    });
  }, []);



const [searchTerm, setSearchTerm] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted :", e);
  console.log(searchTerm);
};

  return (
    <>
      <div className="app-container">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="Search Coins"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col sm={4}>
              <Button type="submit" variant="primary" className="w-100">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
        <NavigationBar />

        <Container fluid className="gradient-background">
          <Homepage cryptoData={cryptoData} />
        </Container>
      </div>
    </>
  );
}

export default App;


 {
   /* Normal div */
 }
 {
   /* <div>
          <h2>{cryptoData[0].name}</h2>
          <p>Symbol: {cryptoData[0].symbol.toUpperCase()}</p>
          <p>Current Price: ${cryptoData[0].current_price}</p>
          <p>Market Cap: ${cryptoData[0].market_cap}</p>
          <img src={cryptoData[0].image} alt={cryptoData[0].name} width="100" height="100" />
        </div> */
 }
  // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&x_cg_demo_api_key=CG-XfxV1iM8BSkozxBHm943FbwU"
        // "https://api.coingecko.com/api/v3/search/trending&api_key=CG-XfxV1iM8BSkozxBHm943FbwU"