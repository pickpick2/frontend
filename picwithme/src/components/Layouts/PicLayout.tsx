import { Outlet } from 'react-router';
import ActiveUsersHeader from '../ui/header/ActiveUsersHeader';
import { userData } from '@/mocks/data/user';

const PicLayout = () => {
  return (
    <main className='flex h-full w-full flex-col gap-4 bg-white'>
      <ActiveUsersHeader userList={userData.userList} />
      <Outlet />
    </main>
  );
};

export default PicLayout;
