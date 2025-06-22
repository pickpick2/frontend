import type { Photo } from '@/types/album';
import TrashIcon from '@/assets/icons/trash.svg?react';
import ClockIcon from '@/assets/icons/clock.svg?react';

interface PhotoSmallCardProps {
  photo: Photo;
}

const PhotoSmallCard: React.FC<PhotoSmallCardProps> = ({ photo }) => {
  return (
    <article>
      <img src={photo.img} alt={photo.title} className='w-full cursor-pointer rounded-lg object-cover' />
      <div className='mt-2 flex items-center justify-between'>
        <h2 className='text-detail font-semibold'>{photo.title}</h2>
        <TrashIcon onClick={() => {}} className='cursor-pointer' />
      </div>
      <div className='mt-1 flex items-center gap-1'>
        <ClockIcon />
        <p className='text-xs'>{photo.createdAt}</p>
      </div>
    </article>
  );
};

export default PhotoSmallCard;
