import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router';

const FindPw = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className='text-[24px] font-bold text-[#A054FF]'>비밀번호 찾기</h1>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <div className='relative'>
          <input
            type='text'
            placeholder='아이디를 입력해주세요.'
            className='w-full border-b border-gray-300 py-2 text-sm placeholder-gray-400 focus:outline-none'
          />
        </div>
        <Button onClick={() => navigate('/setPw')}>다음</Button>
        <Button onClick={() => navigate('/findId')}>아이디 찾기</Button>
      </div>
    </>
  );
};

export default FindPw;
