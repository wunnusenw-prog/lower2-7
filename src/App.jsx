import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// นำเข้าจากโฟลเดอร์ pages (มี s)
import Home from "./pages/Home.jsx";
import Calculate from "./pages/Calculate.jsx";
import FetchApi from "./pages/FetchApi.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState(0);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const disc = parseFloat(discount);

    if (!isNaN(price) && !isNaN(disc)) {
      const finalPrice = price - price * (disc / 100);
      setResult(finalPrice);
    }
  };

  return (
    <BrowserRouter>
      <div style={{ fontFamily: "sans-serif", margin: "20px" }}>
        
        <nav style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
          <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0 }}>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>หน้าแรก</Link>
            </li>
            <li>
              <Link to="/calculate" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>คำนวณส่วนลด</Link>
            </li>
            <li>
              <Link to="/fetchapi" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>ดึงข้อมูล API</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/calculate"
            element={
              <Calculate
                originalPrice={originalPrice}
                setOriginalPrice={setOriginalPrice}
                discount={discount}
                setDiscount={setDiscount}
                result={result}
                calculateDiscount={calculateDiscount}
              />
            }
          />
          <Route path="/fetchapi" element={<FetchApi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;