import { testImage } from '@/mocks/data/image';
import PhotoStepLayout from '@/components/Layouts/PhotoStepLayout';
import PhotoPosition from '@/components/select/PhotoPosition';

const Select: React.FC = () => {
  return (
    <PhotoStepLayout step='select' timer={20}>
      <PhotoPosition imageUrl={testImage.imageUrl} boxes={testImage.boxes} />
    </PhotoStepLayout>
  );
};

export default Select;
