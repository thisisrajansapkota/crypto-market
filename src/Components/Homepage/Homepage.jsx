import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CoinContext } from "../Context/CoinContext";
import "./Homepage.css";
import CoinPage from "../CoinPage/CoinPage";
import bitcoinImage from "../../assets/bitcoin.png";
import etherImage from "../../assets/ether.jpg";

function Homepage() {
  const {
    cryptoData,
    currency,
    searchTerm,
    setSearchTerm,
    setFilteredData,
    filteredData,
    coinData,
    setCoinData,
    coinClicked,
    setCoinClicked,
  } = useContext(CoinContext);
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const newIndex = startIndex + 10;
    if (newIndex < cryptoData.length) {
      setStartIndex(newIndex);
    }
  };

  const handlePrev = () => {
    const newIndex = startIndex - 10;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilteredData(
      cryptoData.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleReset = () => {
    setSearchTerm("");
  };

  const handleCryptoClick = (crypto) => {
    setCoinData(crypto);
    setCoinClicked(true);
    console.log(coinData);
  };

  if (coinClicked) {
    return <CoinPage />;
  }

  return (
    <div className="home-wrapper">
      <div className="content-container">
        <div
          className="header-background"
          style={{
            marginTop: "10px",
            minHeight: "400px",
            // backgroundImage: `url(${etherImage})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundAttachment: "fixed",
          }}
        >
          <h1 className="text-white">
            Largest <br /> Crypto Marketplace
          </h1>
          <Form
            className="d-flex justify-content-center"
            onSubmit={handleSearch}
          >
            <Form.Control
              onChange={handleInput}
              value={searchTerm}
              type="search"
              placeholder="Search"
              className="m-0 form-control"
              aria-label="Search"
            />
            <div className="button-wrapper">
              <Button
                onClick={handleReset}
                variant="light"
                type="button"
                className="btn m-0"
                style={{ color: "red", borderColor: "red" }}
              >
                Reset
              </Button>
            </div>
          </Form>
        </div>

        <div className="crypto-list-container">
          {searchTerm && filteredData.length === 0 ? (
            <div className="no-results">
              No results found. Try another crypto.
            </div>
          ) : (
            (searchTerm && filteredData.length > 0 ? filteredData : cryptoData)
              .slice(startIndex, startIndex + 10)
              .map((crypto, index) => (
                <div
                  key={index}
                  className="crypto-card"
                  onClick={() => handleCryptoClick(crypto)}
                >
                  <img
                    src={crypto.image}
                    alt="crypto"
                    width="50"
                    height="50"
                    className="crypto-image"
                  />
                  <div className="crypto-info">
                    <h5>{crypto.name}</h5>
                    <p>{crypto.symbol.toUpperCase()}</p>
                    <p>
                      Trading at {currency.symbol}
                      {crypto.current_price.toFixed(2)}
                    </p>
                   
                    <p
                      className={
                        crypto.price_change_percentage_24h > 0 ? "green" : "red"
                      }
                    >
                      24h %: {crypto.price_change_percentage_24h.toFixed(2)}%
                    </p>
                    <p
                      className={crypto.price_change_24h > 0 ? "green" : "red"}
                    >
                      24h Change: {currency.symbol}
                      {crypto.price_change_24h.toFixed(2)}
                    </p>
                    <p>
                      Market Cap: {currency.symbol}
                      {crypto.market_cap.toLocaleString()}
                    </p>
                  
                  </div>
                </div>
              ))
          )}
        </div>
        <div className="pagination">
          <Button onClick={handlePrev} disabled={startIndex === 0}>
            Prev
          </Button>{" "}
          <Button
            onClick={handleNext}
            disabled={startIndex + 10 >= cryptoData.length}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
