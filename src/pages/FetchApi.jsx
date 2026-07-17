import React, { useState, useEffect } from 'react';

function FetchApi() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false); // โหลดเสร็จแล้ว
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>ข้อมูลผู้ใช้งานจาก API</h2>
      
      {isLoading ? (
        <p>กำลังโหลดข้อมูล...</p>
      ) : (
        <ul style={{ lineHeight: '1.8' }}>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> (อีเมล: {user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchApi;
