import useInternalRouter from '@/hooks/useInternalRouter';
import BackIcon from '@/assets/icons/back.svg?react';

interface TitleHeaderProps {
  title: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ title }) => {
  const { goBack } = useInternalRouter();

  return (
    <header className='flex h-16 w-full items-center justify-between px-4'>
      <BackIcon onClick={goBack} className='cursor-pointer' />
      <h1 className='text-body1 font-semibold'>{title}</h1>
      <div className='w-6' aria-hidden='true' />
    </header>
  );
};
export { TitleHeader };
