import React from 'react';

function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>การคำนวณราคาหลังจากหักส่วนลด</h2>
      
      <div style={{ 
        backgroundColor: '#f4f4f4', 
        padding: '15px', 
        borderRadius: '8px', 
        display: 'inline-block',
        marginTop: '10px'
      }}>
        <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
          สูตร: ราคาหักส่วนลด = ราคาเดิม * (1 - (ส่วนลด / 100))
        </p>
      </div>

      <p style={{ marginTop: '20px', color: '#555' }}>
        * หมายเหตุ: นำส่วนลดมาหารด้วย 100 เพื่อแปลงเป็นเศษส่วนก่อนนำไปคำนวณ
      </p>
    </div>
  );
}

export default Home;