import React from 'react';

function NotFound() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '48px', color: '#ff4d4f', margin: '0' }}>404</h1>
      <h2>ไม่พบหน้าที่คุณต้องการ (Page Not Found)</h2>
      <p style={{ color: '#666' }}>
        หน้าที่คุณกำลังค้นหาไม่มีอยู่ หรืออาจถูกลบไปแล้ว
      </p>
      
      <div style={{ marginTop: '20px' }}>
        {/* หากใช้ react-router-dom แนะนำให้ใช้ <Link to="/"> กลับหน้าหลัก </Link> แทนแท็ก <a> */}
        <a href="/" style={{ 
          textDecoration: 'none', 
          backgroundColor: '#1890ff', 
          color: 'white', 
          padding: '10px 20px', 
          borderRadius: '5px' 
        }}>
          กลับสู่หน้าหลัก
        </a>
      </div>
    </div>
  );
}

export default NotFound;