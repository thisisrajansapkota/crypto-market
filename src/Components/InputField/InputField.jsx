import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Homepage from "../Homepage/Homepage";

function InputField({ cryptoData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredCoin = cryptoData.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredCoin);

    if (filteredCoin.length > 0) {
      console.log("Coins found: ", filteredCoin);
    } else {
      console.log("coin not found", searchTerm);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Search Coins"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </Col>
          <Col sm={4}>
            <Button type="submit" variant="primary" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      {searchTerm && filteredData.length > 0 ? (
        <ul>
          {filteredData.map((coin) => (
            <div key={coin.id}>
              <li>
                <img src={coin.image} alt={coin.name} />
              </li>
              <li>name: {coin.name} </li>
              <li>id: {coin.id} </li>
              <li>price: ${coin.current_price} </li>
            </div>
          ))}
        </ul>
      ) : searchTerm && filteredData.length === 0 ? (
        <h1>Coin not found!</h1>
      ) : (
        <ul>
          {cryptoData.map((coin) => (
            <div key={coin.id}>
              <li>
                <img src={coin.image} alt={coin.name} />
              </li>
              <li>name: {coin.name} </li>
              <li>id: {coin.id} </li>
              <li>price: ${coin.current_price} </li>
            </div>
          ))}
        </ul>
      )}

      {/* <li>
  <img src={coin.image} alt={coin.name} />
              </li>
              <li>name: {coin.name} </li>
              <li>id: {coin.id} </li>
              <li>price: ${coin.current_price} </li> */}

      {/* main div closes below */}
    </div>
  );
}

export default InputField;
