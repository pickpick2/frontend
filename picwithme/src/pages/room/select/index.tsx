import BackgroundFrame from '@/components/ui/BackgroundFrame';
import { testImage } from '@/mocks/data/image';
import CircleAlertIcon from '@/assets/icons/circle-alert.svg?react';

const Select: React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-5 text-center'>
      <section>
        <span className='text-heading2 text-primary-default font-bold'> 제한시간 내 </span> <br />
        <span className='text-heading2 font-bold'>원하는 위치를 선택해주세요! </span>
        <div className='text-warning flex flex-row gap-2'>
          <CircleAlertIcon className='h-5 w-5' />
          <span>제한시간 내 칸을 고르지 못하면, 랜덤으로 배치돼요.</span>
        </div>
      </section>
      <span className='text-heading2 font-semibold'> 20s </span>
      <BackgroundFrame imageUrl={testImage.imageUrl} boxes={testImage.boxes} />
    </div>
  );
};

export default Select;
