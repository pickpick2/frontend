import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './App.css';
import Login from '@/pages/auth/login';
import AuthLayout from '@components/Layouts/AuthLayout';
import FindId from '@/pages/auth/findId';
import Error404 from '@page/error/404';
import FindPw from '@/pages/auth/findPw';
import Album from '@/pages/album';
import GlobalLayout from '@/components/Layouts/GlobalLayouts';

function App() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <Routes>
          <Route path='/' element={<Navigate to='/auth/login' replace />} />
          <Route path='/auth' element={<AuthLayout />}>
            <Route index element={<Navigate to='login' replace />} />
            <Route path='login' element={<Login />} />
            <Route path='findId' element={<FindId />} />
            <Route path='findPw' element={<FindPw />} />
          </Route>
          <Route path='/album' element={<Album />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default App;
