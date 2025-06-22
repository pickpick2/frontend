import Button from '@/components/ui/Button';
import UserCard from '@/components/room/UserCard';
import { usersData } from '@/mocks/data/room';
import { Link2, Camera } from 'lucide-react';

const Room: React.FC = () => {
  return (
    <div className='flex h-full flex-col justify-center gap-6 px-20'>
      <section className='flex flex-col items-center gap-2'>
        {usersData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>

      <div className='flex flex-col items-center gap-3'>
        <Button onClick={() => {}}>
          <div className='flex items-center justify-center gap-2'>
            <Camera size={18} />
            <p>시작하기</p>
          </div>
        </Button>
        <Button variant='secondary' onClick={() => {}}>
          <div className='flex items-center justify-center gap-2'>
            <Link2 size={20} />
            <p>초대하기</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Room;
