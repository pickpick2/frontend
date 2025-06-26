import logoImg from '@/assets/images/logo.png';
import tempImg from '@/assets/images/temp.png';
import Button from '@/components/ui/Button';
import { Camera } from 'lucide-react';
import AlbumIcon from '@/assets/icons/album.svg?react';
import useInternalRouter from '@/hooks/useInternalRouter';

const MainPage: React.FC = () => {
  const { push } = useInternalRouter();

  return (
    <main className='flex h-full flex-col items-center justify-center gap-10 px-20'>
      <img src={logoImg} alt='Logo' className='logo' width={84} />
      <img src={tempImg} alt='Temporary Image' className='temp-image' width={250} />

      <div className='flex items-center gap-8'>
        <div className='flex flex-col items-center gap-2'>
          <Button
            onClick={() => push('/room/new')}
            className='flex aspect-square w-22 items-center justify-center rounded-full'
          >
            <Camera size={26} />
          </Button>
          <p className='text-detail font-semibold'>사진 찍으러 가기</p>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <Button
            onClick={() => push('/album')}
            className='flex aspect-square w-22 items-center justify-center rounded-full'
          >
            <AlbumIcon />
          </Button>

          <p className='text-detail font-semibold'>내 앨범 보러가기</p>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
