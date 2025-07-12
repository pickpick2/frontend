import PickerLayout from '@/components/Layouts/PickerLayout';
import TestImg from '@/assets/images/defaultImg.png';

const PreviewBack = () => {
  return (
    <PickerLayout step='backgroundPreview'>
      <img src={TestImg} className='w-11/12' />
    </PickerLayout>
  );
};

export default PreviewBack;
