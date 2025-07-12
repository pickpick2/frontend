type StepType = 'frame' | 'background' | 'framePreview' | 'backgroundPreview';

interface PickerLayoutProps {
  step: StepType;
  children: React.ReactNode;
}

const PickerLayout: React.FC<PickerLayoutProps> = ({ step, children }) => {
  const content = {
    frame: {
      title: '원하는 프레임을 선택해주세요!',
      subtitle: '뒤, 자동으로 선택됩니다.',
    },
    framePreview: {
      title: '프레임이 선택되었습니다.',
      subtitle: '뒤, 다음 단계로 이동합니다.',
    },
    background: {
      title: '원하는 배경을 선택해주세요!',
      subtitle: '뒤, 자동으로 선택됩니다.',
    },
    backgroundPreview: {
      title: '배경이 선택되었습니다.',
      subtitle: '뒤, 다음 단계로 이동합니다.',
    },
  };

  const { title, subtitle } = content[step];

  return (
    <div className='flex flex-col items-center gap-10'>
      <section className='w-full px-4 text-start'>
        {step === 'frame' || step === 'background' ? (
          <>
            <span className='text-heading2 text-primary-default font-bold'> 제한시간 내 </span> <br />
          </>
        ) : null}
        <span className='text-heading2 font-bold'>{title} </span>
        <div className='text-primary-default flex flex-row items-center gap-2'>
          <span className='text-detail'>⏱ 3초 {subtitle}</span>
        </div>
      </section>
      {/* 추후 서버시간기준으로 카운트다운 구현 */}
      {children}
    </div>
  );
};

export default PickerLayout;
