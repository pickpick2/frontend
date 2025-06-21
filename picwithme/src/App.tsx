import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Login from '@page/auth/Login';
import AuthLayout from '@components/Layouts/AuthLayout';
import FindId from '@page/auth/FindId';
import Error404 from '@page/error/404';
import FindPw from '@page/auth/FindPw';
import Album from '@/pages/album';
import GlobalLayout from '@/components/Layouts/GlobalLayouts';

function App() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='/findId' element={<FindId />} />
            <Route path='/findPw' element={<FindPw />} />
          </Route>
          <Route path='/album' element={<Album />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default App;
