import HotelListPage from '@pages/HotelList';
import TestPage from '@pages/Test';
import HotelPage from '@pages/Hotel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useLoadKakao from '@hooks/useLoadKakao';

function App() {
  useLoadKakao();
  return (
    // 라우터 분기 설정
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelListPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
