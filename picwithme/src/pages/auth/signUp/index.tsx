import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/input/Input';
import InputPw from '@/components/ui/input/InputPw';
import { useConsentStore } from '@/stores/useConsentStore';
import useInternalRouter from '@/hooks/useInternalRouter';

const SignUp: React.FC = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const agreed = useConsentStore((state) => state.agreed);

  const { push } = useInternalRouter();

  const handleSubmit = () => {
    // TO DO: 회원가입 요청 처리
    push('/auth/profileSignUp');
  };

  return (
    <>
      <h1 className='text-[24px] font-bold text-[#A054FF]'>회원가입</h1>

      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Input value={id} placeholder='아이디를 입력해주세요' onChange={(e) => setId(e.target.value)} />
        <InputPw value={pw} onChange={(e) => setPw(e.target.value)} />
        <InputPw value={confirmPw} placeholder='비밀번호 확인' onChange={(e) => setConfirmPw(e.target.value)} />
        <Button onClick={handleSubmit}>회원가입</Button>
        <div
          className='flex flex-row items-center gap-4'
          onClick={() => {
            push('/auth/privacyPolicy');
          }}
        >
          <div className={`h-5 w-5 rounded-full ${agreed ? 'bg-[#A054FF]' : 'bg-gray-400'}`}></div>
          <span>개인정보처리방침 확인</span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
