import { lazy, Suspense } from 'react';
//code splitting
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AuthGuard from '@/components/auth/AuthGuard';
import useLoadKakao from '@hooks/useLoadKakao';
import Navbar from '@shared/Navbar';

// import PrivateRoute from '@/components/auth/PrivateRoute';
// import HotelListPage from '@pages/HotelList';
// import TestPage from '@pages/Test';
// import HotelPage from '@pages/Hotel';
// import SinginPage from '@pages/Signin';
// import MyPage from '@pages/My';
// import SettingsPage from '@pages/settings';
// import LikePage from '@pages/settings/like';
// import SchedulePage from '@pages/Schedule';
// import ReservationPage from '@pages/Reservation';
// import ReservationDonePage from '@pages/ReservationDone';
// import ReservationListPage from '@pages/ReservationList';

const PrivateRoute = lazy(() => import('@/components/auth/PrivateRoute'));
const HotelListPage = lazy(() => import('@pages/HotelList'));
const TestPage = lazy(() => import('@pages/Test'));
const HotelPage = lazy(() => import('@pages/Hotel'));
const SinginPage = lazy(() => import('@pages/Signin'));
const MyPage = lazy(() => import('@pages/My'));
const SettingsPage = lazy(() => import('@pages/settings'));
const LikePage = lazy(() => import('@pages/settings/like'));
const SchedulePage = lazy(() => import('@pages/Schedule'));
const ReservationPage = lazy(() => import('@pages/Reservation'));
const ReservationDonePage = lazy(() => import('@pages/ReservationDone'));
const ReservationListPage = lazy(() => import('@pages/ReservationList'));

function App() {
  useLoadKakao();
  return (
    <Suspense fallback={<></>}>
      {/* // 라우터 분기 설정 */}
      <HelmetProvider>
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
              <Route
                path="/schedule"
                element={
                  <PrivateRoute>
                    <SchedulePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/reservation"
                element={
                  <PrivateRoute>
                    <ReservationPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/reservation/done"
                element={
                  <PrivateRoute>
                    <ReservationDonePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/reservation/list"
                element={
                  <PrivateRoute>
                    <ReservationListPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </AuthGuard>
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
  );
}

export default App;
