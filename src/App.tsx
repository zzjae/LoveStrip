import HotelListPage from '@pages/HotelList';
import TestPage from '@pages/Test';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    // 라우터 분기 설정
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelListPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
