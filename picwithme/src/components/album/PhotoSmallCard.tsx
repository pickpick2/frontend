import type { Photo } from '@/types/album';
import { Clock, Trash2 } from 'lucide-react';

interface PhotoSmallCardProps {
  photo: Photo;
}

const PhotoSmallCard: React.FC<PhotoSmallCardProps> = ({ photo }) => {
  return (
    <article>
      <img src={photo.img} alt={photo.title} className='w-full cursor-pointer rounded-lg object-cover' />
      <div className='mt-2 flex items-center justify-between'>
        <h2 className='text-detail font-semibold'>{photo.title}</h2>
        <Trash2 size={14} onClick={() => {}} className='text-danger cursor-pointer' />
      </div>
      <div className='mt-0.5 flex items-center gap-1'>
        <Clock size={11} color='gray' />
        <p className='text-xs text-gray-500'>{photo.createdAt}</p>
      </div>
    </article>
  );
};

export default PhotoSmallCard;
