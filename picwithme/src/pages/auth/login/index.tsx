import { useState } from 'react';
import Input from '@/components/ui/input/Input';
import InputPw from '@/components/ui/input/inputPw';
import Button from '@/components/ui/Button';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleSubmit = () => {
    // TO DO: 로그인 요청 처리
  };

  return (
    <>
      <h1 className='text-[24px] font-bold text-[#A054FF]'>로그인</h1>

      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Input value={id} placeholder='아이디를 입력해주세요' onChange={(e) => setId(e.target.value)} />
        <InputPw value={pw} onChange={(e) => setPw(e.target.value)} />
        <Button onClick={handleSubmit}>로그인</Button>
      </div>

      {/* 링크 */}
      <div className='flex gap-2 text-sm text-gray-500'>
        <a href='/auth/findId' className='hover:underline'>
          아이디 찾기
        </a>
        <span>|</span>
        <a href='/auth/findPw' className='hover:underline'>
          비밀번호 찾기
        </a>
      </div>
    </>
  );
};

export default Login;
