import React, { useContext } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { CoinContext } from "../Context/CoinContext";
import "./NavigationBar.css";

function NavigationBar() {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "aud":
        setCurrency({ name: "aud", symbol: "A$" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Link
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Another Link
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Form.Select
              onChange={currencyHandler}
              className="me-2 form-select"
            >
              <option value="usd">USD</option>
              <option value="aud">AUD</option>
              <option value="eur">EUR</option>
            </Form.Select>
           
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
