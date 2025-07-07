import type { Box } from '@/types/image';

interface Props {
  imageUrl: string;
  boxes: Box[];
}

const PhotoPosition = ({ imageUrl, boxes }: Props) => {
  return (
    <div className='relative aspect-[2/3] w-11/12 max-w-[600px]'>
      <img src={imageUrl} alt='배경 이미지' className='absolute inset-0 h-full w-full object-fill' />
      {boxes.map((box, idx) => (
        <div
          key={idx}
          className='absolute'
          style={{
            top: `${box.top}%`,
            left: `${box.left}%`,
            width: `${box.width}%`,
            height: `${box.height}%`,
          }}
          onClick={() => console.log('클릭!')}
        >
          클릭!
        </div>
      ))}
    </div>
  );
};

export default PhotoPosition;
