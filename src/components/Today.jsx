import React, { useState, useEffect } from "react";


const GoldPriceToday = () => {
  const [selectedKarat, setSelectedKarat] = useState("24");
  const [selectedWeight, setSelectedWeight] = useState("31.1034768");
  const [selectedCurrency, setSelectedCurrency] = useState("1.00000");
  const [currentDate, setCurrentDate] = useState("");

  const calculatePrice = (karat, weight, currency) => {
    
    const basePrice = 50; // Example base price
    return (
      basePrice * parseFloat(karat) * parseFloat(weight) * parseFloat(currency)
    );
  };

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const month = { month: "long", day: "numeric", year: "numeric" };
      const formattedDate = `${date.toLocaleDateString(
        "en-US",
        month
      )} `;
      setCurrentDate(formattedDate);
    };
    updateDate();
  }, []);

  const updatePrice = () => {
    const updatedPrice = calculatePrice(
      selectedKarat,
      selectedWeight,
      selectedCurrency
    );
    console.log(`Updated Price: ${updatedPrice}`);
  };

  // Moved the function call to updatePrice inside useEffect to avoid unnecessary calls
  useEffect(() => {
    updatePrice();
  }, [selectedKarat, selectedWeight, selectedCurrency]);

  return (
    
    <div
      className=" container my-3 bg-white rounded shadow-sm p-3"
      style={{ height: "auto !important" }}  >

      <div
        className="my-3 bg-body rounded shadow-sm block"
        style={{ color: "#263c4e" }}
      >
        <h1 className="flex-grow-1 fs-3 m-0 text-start p-2">
          <img
            src="https://pricegold.net/images/goldicon.svg"
            alt=""
            width="35"
          />{" "}
          Gold price today
        </h1>

          <div className="d-flex flex-wrap border-bottom">
          <div className="col-md-4 col-xs-12 px-5 py-2">
            <select
              name="goldkarat"
              id="goldkarat"
              className="form-select form-select-sm p-1 border-0"
              style={{ maxWidth: "70px" }}
              onChange={(e) => setSelectedKarat(e.target.value)}
            >
              <option value="24" selected>
                24k
              </option>
              <option value="22">22k</option>
              <option value="21">21k</option>
              <option value="18">18k</option>
              <option value="14">14k</option>
              <option value="10">10k</option>
              <option value="6">6k</option>
            </select>
          </div>
          <div className="col-md-4 col-xs-12 px-5 py-2">
            <select
              name="goldW"
              id="goldW"
              className="form-select form-select-sm p-1 border-0"
              style={{ maxWidth: "80px" }}
              onChange={(e) => setSelectedWeight(e.target.value)}
            >
              <option value="1">Gram</option>
              <option value="11.6638038">Tola</option>
              <option value="31.1034768" selected>
                Ounce
              </option>
              <option value="100">100Gram</option>
              <option value="1000">Kilo</option>
            </select>
          </div>
          <div className="col-md-4 col-xs-12 px-5 py-2">
            <select
              name="goldCur"
              id="goldCur"
              className="form-select form-select-sm p-1 border-0"
              style={{ maxWidth: "70px" }}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              <option value="1.00000" data-symbol="USD" selected>
                USD
              </option>
              <option value="1.34679" data-symbol="CAD">
                CAD
              </option>
              {/* Add the rest of the options */}
            </select>
          </div>
        </div>

          <div className="row">
            <div className="col-md-8 col-xs-12 px-5 py-2">
              <div className="fs-70">
                <strong className="exMoney" data-value="65.24793" id="livegold">
                  $2,029.44
                </strong>
              </div>
              <div className="fs-3">
              {currentDate}
                <i className="text-danger fs-5 live">Live</i>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 px-5 py-2 fs-5 fw-bold">
              <div className="d-flex justify-content-between">
                <span>Change:</span>
                <span className="text-green">
                  <svg width="15px" height="11.3px">
                    <g>
                      <path fill="green" d="M7.5,0L0,11.3h15"></path>
                    </g>
                  </svg>
                  <span className="exMoney" data-value="0.25897000000001">
                    $8.05
                  </span>{" "}
                  (0.4%)
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Open:</span>
                <span className="exMoney" data-value="64.99145">
                  $2,021.46
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-center">
              <span>High:</span>
              <span className="exMoney" data-value="65.25557">
                $2,029.68
              </span>
            </div>
            <div className="d-flex justify-content-center">
              <span>Low:</span>
              <span className="exMoney" data-value="64.99145">
                $2,021.46
              </span>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded shadow-sm p-3"
          style={{ height: "auto !important" }}
        >
          <p className="fs-5 text-justify">
            The current spot price of gold per ounce is{" "}
            <strong>$2,029.51</strong>. The price of gold per gram is{" "}
            <strong>$65.25</strong>. When the market opened today, the price of
            gold was $2,021.46. The highest price that gold reached today was
            $2,029.68, and the lowest price was $2,021.46.
          </p>
          <div className="table-responsive">
            <table className="table table-striped table-sm table-hover fs-14 min-500">
              <thead>
                <tr className="border-bottom border-2 border-warning">
                  <th>Gold</th>
                  <th>Current price</th>
                  <th>Open</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>
                    Change
                    <svg width="15px" height="11.3px" className="ms-1 live">
                      <g>
                        <path fill="green" d="M7.5,0L0,11.3h15"></path>
                      </g>
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Add your gold price data here */}
                {/* Example for 24k 1Gram */}
                <tr>
                  <td>
                    
                      24k 1Gram
                   
                  </td>
                  <td>
                    <strong>$65.25</strong>
                  </td>
                  <td>$64.99</td>
                  <td>$65.26</td>
                  <td>$64.99</td>
                  <td>$0.26</td>
                </tr>
                {/* Continue adding rows for other types of gold */}
              </tbody>
            </table>
          </div>
        </div>
      <div>
      <p className="fs-5 text-justify">
      The current spot price of gold per ounce is <strong>$2,029.51</strong>. The price of gold per gram is <strong>$65.25</strong>.
      When the market opened today, the price of gold was $2,021.46. The highest price that gold reached today was $2,029.68, and the lowest price was $2,021.46.
    </p>
      </div>

    <div className="table-responsive">
      <table className="table table-striped table-sm table-hover fs-14 min-500">
        <thead>
          <tr className="border-bottom border-2 border-warning">
            <th>Gold</th>
            <th>Current price</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>
              Change
              <svg width="15px" height="11.3px" className="ms-1 live">
                <g>
                  <path fill="green" d="M7.5,0L0,11.3h15"></path>
                </g>
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Replace the following rows with your actual data */}
          <tr>
            <td>
            24k 1Gram
            </td>
            <td>
              <strong>$65.25</strong>
            </td>
            <td>$64.99</td>
            <td>$65.26</td>
            <td>$64.99</td>
            <td>$0.26</td>
          </tr>
          <tr>
            <td>
            22k 1Gram
            </td>
            <td>
              <strong>$59.81</strong>
            </td>
            <td>$59.58</td>
            <td>$59.82</td>
            <td>$59.58</td>
            <td>$0.24</td>
          </tr>
          <tr>
            <td>
            21k 1Gram
            </td>
            <td>
              <strong>$57.09</strong>
            </td>
            <td>$56.87</td>
            <td>$57.10</td>
            <td>$56.87</td>
            <td>$0.23</td>
          </tr>
          <tr>
            <td>
            18k 1Gram
            </td>
            <td>
              <strong>$48.94</strong>
            </td>
            <td>$48.74</td>
            <td>$48.94</td>
            <td>$48.74</td>
            <td>$0.19</td>
          </tr>
          <tr>
            <td>
            14k 1Gram
            </td>
            <td>
              <strong>$38.06</strong>
            </td>
            <td>$37.91</td>
            <td>$38.07</td>
            <td>$37.91</td>
            <td>$0.15</td>
          </tr>
          <tr>
            <td>
            10k 1Gram
            </td>
            <td>
              <strong>$27.19</strong>
            </td>
            <td>$27.08</td>
            <td>$27.19</td>
            <td>$27.08</td>
            <td>$0.11</td>
          </tr>
          <tr>
            <td>
            Ounce
            </td>
            <td>
              <strong>$2,029.51</strong>
            </td>
            <td>$2,021.46</td>
            <td>$2,029.68</td>
            <td>$2,021.46</td>
            <td>$8.05</td>
          </tr>
          <tr>
            <td>
            Tola
            </td>
            <td>
              <strong>$761.07</strong>
            </td>
            <td>$758.05</td>
            <td>$761.13</td>
            <td>$758.05</td>
            <td>$3.02</td>
          </tr>
          <tr>
            <td>
            100 Gram
            </td>
            <td>
              <strong>$6,525.04</strong>
            </td>
            <td>$6,499.15</td>
            <td>$6,525.56</td>
            <td>$6,499.15</td>
            <td>$25.90</td>
          </tr>
          <tr>
            <td>
             Kilogram
            </td>
            <td>
              <strong>$65,250.42</strong>
            </td>
            <td>$64,991.45</td>
            <td>$65,255.57</td>
            <td>$64,991.45</td>
            <td>$258.97</td>
          </tr>
       
        </tbody>
      </table>
    </div>
      </div>


       
  );
};

export default GoldPriceToday;
