import useInternalRouter from '@/hooks/useInternalRouter';
import { ArrowLeft } from 'lucide-react';

interface TitleHeaderProps {
  title: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ title }) => {
  const { goBack } = useInternalRouter();

  return (
    <header className='sticky top-0 z-20 flex h-16 w-full shrink-0 items-center justify-between bg-white px-4'>
      <ArrowLeft onClick={goBack} className='cursor-pointer' />
      <h1 className='text-body1 font-semibold'>{title}</h1>
      <div className='w-6' aria-hidden='true' />
    </header>
  );
};
export { TitleHeader };
