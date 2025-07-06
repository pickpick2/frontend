import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './App.css';
import MainPage from '@/pages';
import Login from '@/pages/auth/login';
import AuthLayout from '@components/Layouts/AuthLayout';
import FindId from '@/pages/auth/findId';
import Error404 from '@page/error/404';
import FindPw from '@/pages/auth/findPw';
import Room from '@/pages/room';
import NewRoom from '@/pages/room/new';
import Album from '@/pages/album';
import GlobalLayout from '@/components/Layouts/GlobalLayouts';
import SignUp from './pages/auth/signUp';
import PrivacyPolicy from './pages/auth/privacyPolicy';
import ProfileSignUp from './pages/auth/signUp/profileSignUp';
import Select from './pages/select';
import DrawRoom from '@/pages/room/draw';

function App() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <Routes>
          {/* TODO: 추후 로그인 여부에 따라 접근 가능한 페이지 설정 */}
          {/* <Route path='/' element={<Navigate to='/auth/login' replace />} /> */}
          <Route path='/' element={<MainPage />} />
          <Route path='/auth' element={<AuthLayout />}>
            <Route index element={<Navigate to='login' replace />} />
            <Route path='login' element={<Login />} />
            <Route path='findId' element={<FindId />} />
            <Route path='findPw' element={<FindPw />} />
            <Route path='signUp' element={<SignUp />} />
            <Route path='privacyPolicy' element={<PrivacyPolicy />} />
            <Route path='profileSignUp' element={<ProfileSignUp />} />
          </Route>
          <Route path='/room' element={<Room />} />
          <Route path='/room/new' element={<NewRoom />} />
          <Route path='/room/draw' element={<DrawRoom />} />
          <Route path='/album' element={<Album />} />
          <Route path='/select' element={<Select />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default App;
