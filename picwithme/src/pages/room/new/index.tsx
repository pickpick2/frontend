import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import Input from '@/components/ui/input/Input';
import PeopleIcon from '@/assets/icons/people.svg?react';
import { useState } from 'react';
import useInternalRouter from '@/hooks/useInternalRouter';

const CAPACITY_OPTIONS = Array.from({ length: 8 }, (_, i) => String(i + 1));

const NewRoom: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [capacity, setCapacity] = useState<string>('');

  const { push } = useInternalRouter();

  const handleCreateRoom = () => {
    // TODO: 추후 title, capacity에 대한 유효성 검사 및 방 생성 로직 추가
    push('/room');
  };

  return (
    <div className='flex h-full flex-col items-center justify-center gap-20 px-20'>
      <h1 className='text-heading1 font-semibold'>방 정보를 설정해 주세요.</h1>
      <section className='flex w-full flex-col gap-4'>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='방 제목' />
        <Dropdown
          value={capacity}
          options={CAPACITY_OPTIONS}
          onChange={setCapacity}
          icon={<PeopleIcon />}
          placeholder='인원수'
        />
      </section>
      <Button onClick={handleCreateRoom}>방 만들기</Button>
    </div>
  );
};

export default NewRoom;
