import Header from "./components/Header";
import PriceGold from "./components/PriceGold";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Today from "./components/Today";
import GoldCalculator from "./components/GoldCalculator";


function GoldPriceLink() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/pricegold" element={<PriceGold />} />
          <Route path="/today" element={<Today />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/goldcalculator" element={<GoldCalculator />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default GoldPriceLink;