import type { User } from '@/types/room.ts';
import logoImg from '@/assets/images/logo.png';
import Avatar from '../Avatar';

interface ActiveUsersHeaderProps {
  userList: User[];
}

const ActiveUsersHeader: React.FC<ActiveUsersHeaderProps> = ({ userList }) => {
  return (
    <div className='sticky top-0 z-20 flex h-16 w-full shrink-0 items-center justify-between bg-white px-4'>
      <img src={logoImg} alt='Logo' className='logo' width={40} />
      <div className='flex flex-row gap-2'>
        {userList.map((user) => (
          <Avatar key={user.id} src={user.img} className='bg-warning' />
        ))}
      </div>
    </div>
  );
};

export default ActiveUsersHeader;
