'use client';
import { useState } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState('');

  const handleLogin = () => {
    // Giả lập luồng đăng nhập thành công với TideCloak
    setIsLoggedIn(true);
  };

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>RMIT Hackathon: Prototype</h1>
      <p>Giải pháp bảo mật thông tin phi tập trung sử dụng TideCloak.</p>

      {!isLoggedIn ? (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Xác thực danh tính</h2>
          <p>Đăng nhập an toàn để loại bỏ điểm nghẽn về lòng tin.</p>
          <button 
            onClick={handleLogin}
            style={{ padding: '10px 20px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Login with TideCloak
          </button>
        </div>
      ) : (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #28a745', borderRadius: '8px', background: '#f8fff8' }}>
          <h2>Chào mừng bạn đã đăng nhập thành công!</h2>
          <p>Trạng thái: Đã xác thực qua Emergent Authority.</p>
          
          <div style={{ marginTop: '15px' }}>
            <label>Nhập dữ liệu cần bảo mật:</label><br />
            <textarea 
              rows="3" 
              style={{ width: '100%', marginTop: '5px', padding: '8px' }}
              placeholder="Nhập thông tin bản ghi..."
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <button 
              onClick={() => alert('Đã lưu trữ dữ liệu an toàn!')}
              style={{ marginTop: '10px', padding: '8px 16px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Lưu bản ghi
            </button>
          </div>
        </div>
      )}
    </main>
  );
}