import CircleAlertIcon from '@/assets/icons/circle-alert.svg?react';

type StepType = 'select' | 'pic';

interface PhotoStepLayoutProps {
  step: StepType;
  timer: number;
  children: React.ReactNode;
}

const PhotoStepLayout: React.FC<PhotoStepLayoutProps> = ({ step, timer, children }) => {
  const content = {
    select: {
      title: '원하는 위치를 선택해주세요!',
      subtitle: '제한시간 내 칸을 고르지 못하면, 랜덤으로 배치돼요.',
    },
    pic: {
      title: '사진을 찍어 주세요!',
      subtitle: '제한시간 내 사진을 찍지 못하더라도, 자동으로 캡처돼요.',
    },
  };

  const { title, subtitle } = content[step];

  return (
    <div className='flex flex-col items-center gap-5 text-center'>
      <section>
        <span className='text-heading2 text-primary-default font-bold'> 제한시간 내 </span> <br />
        <span className='text-heading2 font-bold'>{title} </span>
        <div className='text-warning flex flex-row items-center gap-2'>
          <CircleAlertIcon className='h-4 w-4' />
          <span className='text-detail'>{subtitle}</span>
        </div>
      </section>
      {/* 추후 서버시간기준으로 카운트다운 구현 */}
      <span className='text-heading2 font-semibold'>{timer}s</span>
      {children}
    </div>
  );
};

export default PhotoStepLayout;
