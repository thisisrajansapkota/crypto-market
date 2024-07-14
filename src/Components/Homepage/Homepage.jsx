<div className="home-wrapper">
  <div className="content-container">
    <div className="header-background">
      <h1 style={{color: "black"}}>
        Largest <br /> Crypto Marketplace
      </h1>
      <Form className="d-flex justify-content-center" onSubmit={handleSearch}>
        <Form.Control
          onChange={handleInput}
          value={searchTerm}
          type="search"
          placeholder="Search"
          className="me-2 form-control"
          aria-label="Search"
        />
        <div className="button-wrapper">
          <Button
            onClick={handleReset}
            variant="light"
            type="submit"
            className="btn"
          >
            Reset
          </Button>
        </div>
      </Form>
    </div>

    <table className="crypto-table">
      <thead
        className={searchTerm && filteredData.length === 0 ? "hidden" : ""}
      >
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>All Time High</th>
          <th>24h %</th>
          <th>24h Change</th>
          <th>Market Cap</th>
          <th>Volume (24h)</th>
          <th>Circulating Supply</th>
          <th>Total Supply</th>
        </tr>
      </thead>
      <tbody>
        {searchTerm && filteredData.length > 0 ? (
          filteredData
            .slice(startIndex, startIndex + 10)
            .map((crypto, index) => (
              <tr key={index}>
                <td>{startIndex + index + 1}</td>
                <td className="d-flex">
                  <img src={crypto.image} alt="crypto" width="50" height="50" />
                  <h5>{crypto.name}</h5>
                </td>
                <td>{crypto.symbol.toUpperCase()}</td>
                <td>
                  {currency.symbol}
                  {crypto.current_price.toFixed(2)}
                </td>
                <td>
                  {currency.symbol}
                  {crypto.ath.toFixed(2)}
                </td>
                <td
                  className={
                    crypto.price_change_percentage_24h > 0 ? "green" : "red"
                  }
                >
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className={crypto.price_change_24h > 0 ? "green" : "red"}>
                  {currency.symbol}
                  {crypto.price_change_24h.toFixed(2)}
                </td>
                <td>
                  {currency.symbol}
                  {crypto.market_cap.toLocaleString()}
                </td>
                <td>
                  {currency.symbol}
                  {crypto.total_volume.toLocaleString()}
                </td>
                <td>
                  {crypto.circulating_supply.toLocaleString()}{" "}
                  {crypto.symbol.toUpperCase()}
                </td>
                <td>
                  {crypto.total_supply} {crypto.symbol.toUpperCase()}
                </td>
              </tr>
            ))
        ) : searchTerm && filteredData.length === 0 ? (
          <tr>
            <td colSpan="11" style={{ textAlign: "center" }}>
              No results found. Try another crypto.
            </td>
          </tr>
        ) : (
          cryptoData.slice(startIndex, startIndex + 10).map((crypto, index) => (
            <tr key={index}>
              <td>{startIndex + index + 1}</td>
              <td className="d-flex">
                <img src={crypto.image} alt="crypto" width="50" height="50" />
                <h5>{crypto.name}</h5>
              </td>
              <td>{crypto.symbol.toUpperCase()}</td>
              <td>
                {currency.symbol}
                {crypto.current_price.toFixed(2)}
              </td>
              <td>
                {currency.symbol}
                {crypto.ath.toFixed(2)}
              </td>
              <td
                className={
                  crypto.price_change_percentage_24h > 0 ? "green" : "red"
                }
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className={crypto.price_change_24h > 0 ? "green" : "red"}>
                {currency.symbol}
                {crypto.price_change_24h.toFixed(2)}
              </td>
              <td>
                {currency.symbol}
                {crypto.market_cap.toLocaleString()}
              </td>
              <td>
                {currency.symbol}
                {crypto.total_volume.toLocaleString()}
              </td>
              <td>
                {crypto.circulating_supply.toLocaleString()}{" "}
                {crypto.symbol.toUpperCase()}
              </td>
              <td>
                {crypto.total_supply} {crypto.symbol.toUpperCase()}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
    <div
      className={
        searchTerm && filteredData.length === 0 ? "hidden" : "pagination"
      }
    >
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
</div>;
