import { useState } from 'react';
import Eye from '@/assets/icons/eyes.svg?react';
import Eyeoff from '@/assets/icons/sreyes.svg?react';

interface InputPwProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPw: React.FC<InputPwProps> = ({ value, placeholder, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='relative'>
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        placeholder={placeholder || '비밀번호를 입력해주세요.'}
        onChange={onChange}
        className='w-full border-b border-gray-300 py-2 pr-10 text-sm placeholder-gray-400 focus:outline-none'
      />
      <div
        onClick={() => setShowPassword(!showPassword)}
        className='absolute top-1/2 right-0 -translate-y-1/2 p-2 text-gray-400'
      >
        {showPassword ? <Eye /> : <Eyeoff />}
      </div>
    </div>
  );
};

export default InputPw;
