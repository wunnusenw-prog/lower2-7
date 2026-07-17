import React, { useState } from 'react';

function Calculate() {
  // 1. สร้าง State
  const [originalPrice, setOriginalPrice] = useState(''); 
  const [discount, setDiscount] = useState('');           
  const [result, setResult] = useState(0);                

  // 2. ฟังก์ชันสำหรับคำนวณส่วนลด
  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const disc = parseFloat(discount);

    if (!isNaN(price) && !isNaN(disc)) {
      const finalPrice = price - (price * (disc / 100));
      setResult(finalPrice);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>โปรแกรมคำนวณส่วนลด</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>ราคาเดิม: </label>
        <input 
          type="number" 
          value={originalPrice} 
          onChange={(e) => setOriginalPrice(e.target.value)} 
          placeholder="ระบุราคาเดิม"
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>ส่วนลด (%): </label>
        <input 
          type="number" 
          value={discount} 
          onChange={(e) => setDiscount(e.target.value)} 
          placeholder="ระบุส่วนลด"
        />
      </div>

      <button onClick={calculateDiscount}>คำนวณ</button>

      <div style={{ marginTop: '20px' }}>
        <h3>ราคาหลังหักส่วนลด: {result.toFixed(2)} บาท</h3>
      </div>
    </div>
  );
}

export default Calculate;