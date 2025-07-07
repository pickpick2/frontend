import { testImage } from '@/mocks/data/image';
import PhotoStepLayout from '@/components/Layouts/PhotoStepLayout';
import Video from '@/components/ui/Video';

const Photo: React.FC = () => {
  return (
    <PhotoStepLayout step='pic' timer={20}>
      <Video imageUrl={testImage.imageUrl} boxes={testImage.boxes} />
    </PhotoStepLayout>
  );
};

export default Photo;
