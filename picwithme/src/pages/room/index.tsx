import Button from '@/components/ui/Button';
import UserCard from '@/components/room/UserCard';
import { usersData } from '@/mocks/data/room';

const Room: React.FC = () => {
  return (
    <div className='flex h-full flex-col justify-center gap-6 px-20'>
      <section className='flex flex-col items-center gap-2'>
        {usersData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>

      <div className='flex flex-col items-center gap-3'>
        <Button onClick={() => {}}>시작하기</Button>
        <Button variant='secondary' onClick={() => {}}>
          초대하기
        </Button>
      </div>
    </div>
  );
};

export default Room;
