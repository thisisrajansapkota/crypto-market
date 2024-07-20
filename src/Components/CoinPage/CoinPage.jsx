import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../Context/CoinContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import moment from "moment";
import "./Coinpage.css";

function CoinPage() {
  const { currency, coinData } = useContext(CoinContext);
  const [graphData, setGraphData] = useState(null);

  // Fetch graph data from CoinGecko API
  async function fetchGraph() {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/${coinData.id}/market_chart?vs_currency=${currency.name}&days=30`;

      const res = await fetch(url);
      const data = await res.json();
      console.log("Data parsed:", data);
      setGraphData(data);
    } catch (err) {
      console.log("Error occurred:", err);
    }
  }

  // Fetch graph data when currency or coinData.id changes
  useEffect(() => {
    fetchGraph();
  }, [currency.name, coinData.id]);

  return (
    <Container className="coin-page mt-4 rounded">
      <Row>
        <Col md={4} className="coin-header">
          <Card className="text-center">
            <Card.Body>
              <img
                src={coinData.image}
                alt="coin"
                width="100"
                height="100"
                className="mb-3"
              />
              <h5>{coinData.name}</h5>
              <p className="text-muted">{coinData.symbol.toUpperCase()}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} className="coin-stats">
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <p>
                    <strong>Price:</strong> {currency.symbol}
                    {coinData.current_price.toFixed(2)}
                  </p>
                  <p>
                    <strong>ATH:</strong> {currency.symbol}
                    {coinData.ath.toFixed(2)}
                  </p>
                  <p
                    className={
                      coinData.price_change_percentage_24h > 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    <strong>24h Change:</strong>{" "}
                    {coinData.price_change_percentage_24h.toFixed(2)}%
                  </p>
                  <p
                    className={
                      coinData.price_change_24h > 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    <strong>24h Change (Value):</strong> {currency.symbol}
                    {coinData.price_change_24h.toFixed(2)}
                  </p>
                </Col>
                <Col md={6}>
                  <p>
                    <strong>Market Cap:</strong> {currency.symbol}
                    {coinData.market_cap.toLocaleString()}
                  </p>
                  <p>
                    <strong>Volume (24h):</strong> {currency.symbol}
                    {coinData.total_volume.toLocaleString()}
                  </p>
                  <p>
                    <strong>Circulating Supply:</strong>{" "}
                    {coinData.circulating_supply.toLocaleString()}{" "}
                    {coinData.symbol.toUpperCase()}
                  </p>
                  <p>
                    <strong>Total Supply:</strong> {coinData.total_supply}{" "}
                    {coinData.symbol.toUpperCase()}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <h5 className="mb-3 text-center text-primary">
                Additional Details
              </h5>
              <p>
                <strong>ATH Date:</strong>{" "}
                {moment(coinData.ath_date).format("MMMM D, YYYY [at] h:mm A")}
              </p>
              <p>
                <strong>Fully Diluted Valuation:</strong> {currency.symbol}
                {coinData.fully_diluted_valuation.toLocaleString()}
              </p>
              <p>
                <strong>Max Supply:</strong> {coinData.max_supply}
              </p>
              <p>
                <strong>Price Change (24h):</strong>{" "}
                {coinData.price_change_percentage_24h.toFixed(2)}%
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <a href="/">
        <Button className="d-block mx-auto mt-3 bg-success">More Coins</Button>
      </a>
    </Container>
  );
}

export default CoinPage;
