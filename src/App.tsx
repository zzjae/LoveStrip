import HotelListPage from '@pages/HotelList';
import TestPage from '@pages/Test';
import HotelPage from '@pages/Hotel';
import SinginPage from '@/pages/Signin';
import MyPage from '@/pages/My';
import Navbar from '@shared/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthGuard from '@/components/auth/AuthGuard';
import useLoadKakao from '@hooks/useLoadKakao';

function App() {
  useLoadKakao();
  return (
    // 라우터 분기 설정
    <BrowserRouter>
      <AuthGuard>
        <Navbar />
        <Routes>
          <Route path="/" element={<HotelListPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/hotel/:id" element={<HotelPage />} />
          <Route path="/signin" element={<SinginPage />} />
          <Route path="/my" element={<MyPage />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  );
}

export default App;
