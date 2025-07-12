import PickerLayout from '@/components/Layouts/PickerLayout';
import TestImg from '@/assets/images/frames/Frame1x4.png';

const PreviewFrame = () => {
  return (
    <PickerLayout step='framePreview'>
      <img src={TestImg} className='h-1/2 w-1/2' />
    </PickerLayout>
  );
};

export default PreviewFrame;
