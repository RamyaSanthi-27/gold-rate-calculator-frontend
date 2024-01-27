import React, { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import axios from "axios";
import { Oval } from "react-loader-spinner";

const url = "https://goldrate-calculator-687v.onrender.com";

const UNIT = [
  { value: 'gram', label: 'gram' },
  { value: 'pavan', label: 'pavan' }
];

const CARRAT = [
  { value: '24k', label: '24k' },
  { value: '22k', label: '22k' },
  { value: '18k', label: '18k' }
];

const currencies = [
  { value: 'Rs', label: '₹', conversionRate: 1 },
  { value: 'USD', label: '$', conversionRate: 83.16 }
];

export default function Home() {
  const pdfRef = useRef(null);

  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState('gram');
  const [carrat, setCarrat] = useState('24k');
  const [currency, setCurrency] = useState('₹');
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    try {
      setLoading(true);
     const res = await axios.get(`${url}/api/getInr`)
   //  console.log(res)
     const price = res.data.price.price;
 
     let calculatedAmount = 0;
     if (unit === 'gram') {
       if (carrat === '24k') {
         calculatedAmount = quantity * price;
       } else if (carrat === '22k') {
         calculatedAmount = quantity * (price - 443.15);
       } else if (carrat === '18k') {
         calculatedAmount = quantity * (price - 886.3);
       }
     } else if (unit === 'pavan') {
       if (carrat === '24k') {
         calculatedAmount = quantity * 8 * price;
       } else if (carrat === '22k') {
         calculatedAmount = quantity * 8 * (price - 443.15);
       } else if (carrat === '18k') {
         calculatedAmount = quantity * 8 * (price - 886.3);
       }
     }
 
     const conversionRate = currencies.find(curr => curr.value === currency)?.conversionRate || 1;
     const convertedAmount = calculatedAmount / conversionRate;
 
     setTotalAmount(convertedAmount);
     setLoading(false);
    } catch (error) {
      setLoading(false);
     console.log(error)
    }
   };
   

  const handleDownload = () => {
    const content = pdfRef.current;

    const doc = new jsPDF();
    doc.html(content, {
      callback: function (doc) {
        doc.save('Gold_data.pdf');
      },
      width: 180,
      windowWidth: 500,
      hight: 1000,
    });
  };
  
  return (
    <div className="bg-color" style={{  minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <h1 style={{ color: "#FFD700", marginBottom: "20px" }}>Gold Rate Calculator</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
        <TextField
          id="outlined-basic"
          type='number'
          label="Quantity"
          variant="outlined"
          onChange={(e) => setQuantity(e.target.value)}
          style={{ marginBottom: "15px", width: "250px" }}
        />
        <TextField
          id="filled-select-unit-native"
          select
          label="Unit"
          defaultValue="gram"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your unit"
          variant="filled"
          onChange={(e) => setUnit(e.target.value)}
          style={{ marginBottom: "15px", width: "250px" }}
        >
          {UNIT.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="filled-select-carrat-native"
          select
          label="Carat"
          defaultValue="24k"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your carat"
          variant="filled"
          onChange={(e) => setCarrat(e.target.value)}
          style={{ marginBottom: "15px", width: "250px" }}
        >
          {CARRAT.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="Currency"
          defaultValue="₹"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
          onChange={(e) => setCurrency(e.target.value)}
          style={{ marginBottom: "15px", width: "250px" }}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <Button style={{ backgroundColor: "#8B7500", color: "#FFFFFF", marginBottom: "15px", width: "250px" }} 
        onClick={handleCalculate} > {loading ? (
          <div className="d-flex justify-content-center">
            <Oval
              height={30}
              width={30}
              color="#fff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#86b7fe"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          "Calculate"
        )}</Button>
        {totalAmount ? (
          <div ref={pdfRef} id="tata">
            <h4 style={{ color: "#FFD700", marginBottom: "15px" }}>{carrat} Gold Price Today</h4>
            {unit === 'gram' ? (
              <table style={{ width: "100%", textAlign: "center", marginBottom: "15px" }}>
                <thead>
                  <tr>
                    <th>Gram</th>
                    <th>Gold Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 Gram</td>
                    <td>{totalAmount.toFixed(0)}</td>
                  </tr>
                  <tr>
                    <td>8 Gram</td>
                    <td>{totalAmount.toFixed(0) * 8}</td>
                  </tr>
                  <tr>
                    <td>10 Gram</td>
                    <td>{totalAmount.toFixed(0) * 10}</td>
                  </tr>
                  <tr>
                    <td>100 Gram</td>
                    <td>{totalAmount.toFixed(0) * 100}</td>
                  </tr>
                  <tr>
                    <td><mark>{quantity} Gram</mark></td>
                    <td><mark>{totalAmount.toFixed(0) * quantity}</mark></td>
                  </tr>
                </tbody>
              </table>
            ) : unit === 'pavan' ? (
              <table style={{ width: "100%", textAlign: "center", marginBottom: "15px" }}>
                <thead>
                  <tr>
                    <th>Pavan</th>
                    <th>Gold Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 Pavan</td>
                    <td>{totalAmount.toFixed(0)}</td>
                  </tr>
                  <tr>
                    <td>8 Pavan</td>
                    <td>{totalAmount.toFixed(0) * 8}</td>
                  </tr>
                  <tr>
                    <td>10 Pavan</td>
                    <td>{totalAmount.toFixed(0) * 10}</td>
                  </tr>
                  <tr>
                    <td>100 Pavan</td>
                    <td>{totalAmount.toFixed(0) * 100}</td>
                  </tr>
                  <tr>
                    <td><mark>{quantity} Pavan</mark></td>
                    <td><mark>{totalAmount.toFixed(0) * quantity}</mark></td>
                  </tr>
                </tbody>
              </table>
            ) : null}
          </div>
        ) : null}
        {totalAmount ? (
          <div style={{ textAlign: "end", color: "#FFD700" }}>
            <button
              type="button"
              style={{ backgroundColor: "#8B7500", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }}
              onClick={handleDownload}
            >
              <i className="fas fa-download" style={{ color: "#FFFFFF" }}></i>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
