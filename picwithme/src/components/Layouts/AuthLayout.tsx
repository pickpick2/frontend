import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <main className='flex h-full w-full flex-col items-center justify-center gap-8 bg-white p-16'>
      <Outlet />
    </main>
  );
};

export default AuthLayout;
