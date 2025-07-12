import Carousel from '@/components/background/carousel';
import PickerLayout from '@/components/Layouts/PickerLayout';
import { backImageList } from '@/mocks/data/image';

const BackChoice = () => {
  return (
    <PickerLayout step='background'>
      <Carousel imageList={backImageList} />
    </PickerLayout>
  );
};

export default BackChoice;
