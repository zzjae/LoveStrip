import PrivateRoute from '@/components/auth/PrivateRoute';

import HotelListPage from '@pages/HotelList';
import TestPage from '@pages/Test';
import HotelPage from '@pages/Hotel';
import SinginPage from '@/pages/Signin';
import MyPage from '@pages/My';
import Navbar from '@shared/Navbar';

import SettingsPage from '@pages/settings';
import LikePage from '@pages/settings/like';
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
          <Route
            path="/my"
            element={
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings/like"
            element={
              <PrivateRoute>
                <LikePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  );
}

export default App;
