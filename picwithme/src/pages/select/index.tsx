import BackgroundFrame from '@/components/ui/BackgroundFrame';
import { testImage } from '@/mocks/data/image';

const Select: React.FC = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-neutral-100'>
      <BackgroundFrame imageUrl={testImage.imageUrl} boxes={testImage.boxes} />
    </div>
  );
};

export default Select;
