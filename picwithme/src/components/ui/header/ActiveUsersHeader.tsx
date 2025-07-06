import type { User } from '@/types/room.ts';
import logoImg from '@/assets/images/logo.png';

interface ActiveUsersHeaderProps {
  userList: User[];
}

const ActiveUsersHeader: React.FC<ActiveUsersHeaderProps> = ({ userList }) => {
  return (
    <div className='sticky top-0 z-20 flex h-16 w-full shrink-0 items-center justify-between bg-white px-4'>
      <img src={logoImg} alt='Logo' className='logo' width={84} />
      {userList.map((user) => (
        <img className='h-12 w-12 rounded-full object-cover' id={user.id} src={user.name} alt='유저 썸네일' />
      ))}
    </div>
  );
};

export default ActiveUsersHeader;
