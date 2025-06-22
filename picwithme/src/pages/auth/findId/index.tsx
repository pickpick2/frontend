import Button from '@/components/ui/Button';
import Input from '@/components/ui/input/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const FindId = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');

  return (
    <>
      <h1 className='text-[24px] font-bold text-[#A054FF]'>아이디 찾기</h1>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Input value={id} placeholder='아이디를 입력해주세요.' onChange={(e) => setId(e.target.value)} />
        <Button onClick={() => navigate('/auth/login')}>로그인 하러가기</Button>
        <Button onClick={() => navigate('/auth/findPw')}>비밀번호 찾기</Button>
      </div>
    </>
  );
};

export default FindId;
