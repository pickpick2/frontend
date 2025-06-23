import { useRef, useState } from 'react';
import { ImageUp } from 'lucide-react';
import defaultProfile from '@/assets/images/default.png';
import Input from '@/components/ui/input/Input';
import Button from '@/components/ui/Button';

const ProfileSignUp: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false); // 중복 여부
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
    setIsDuplicate(false); // API 호출 후에 실제 중복 확인 구현
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const isFormValid = nickname.trim() !== '' && !isDuplicate;

  return (
    <div className='flex w-full max-w-xs flex-col gap-6'>
      <div className='flex flex-col text-center'>
        <span className='text-heading1 font-bold'>반가워요!</span>
        <p>
          <span className='text-heading4 text-primary-default font-petit font-bold'>Pic With Me</span> 에서 활동하실
          <br />
          <span className='text-body2 font-bold'>닉네임</span>과
          <span className='text-body2 font-bold'> 프로필 사진</span>을 등록해주세요!
        </p>
      </div>

      <div className='relative mx-auto w-fit'>
        <img
          src={profileImage || defaultProfile}
          alt='profile'
          className='h-[120px] w-[120px] rounded-full object-cover'
        />
        <div
          onClick={handleImageUpload}
          className='absolute right-0 bottom-0 flex h-10 w-10 justify-center rounded-full bg-white shadow'
        >
          <ImageUp size={20} className='text-primary-default m-auto' />
        </div>

        <input type='file' accept='image/*' ref={fileInputRef} onChange={handleImageChange} className='hidden' />
      </div>

      <div className='w-full max-w-xs'>
        <Input value={nickname} onChange={handleNicknameChange} placeholder='닉네임을 입력해주세요' />
        {isDuplicate && <p className='mt-1 text-center text-xs text-[#FF4D4D]'>중복된 닉네임 입니다.</p>}
      </div>

      <Button
        onClick={() => {
          // 가입 처리
        }}
        variant={isFormValid ? 'primary' : 'disabled'}
        className='w-full max-w-sm'
      >
        가입하기
      </Button>
    </div>
  );
};

export default ProfileSignUp;
