import type { Photo } from '@/types/album';

interface PhotoSmallCardProps {
  photo: Photo;
}

const PhotoSmallCard: React.FC<PhotoSmallCardProps> = ({ photo }) => {
  return (
    <article className='cursor-pointer'>
      <img src={photo.img} alt={photo.title} className='w-full rounded-lg object-cover' />
      <h2 className='text-detail mt-2 font-semibold'>{photo.title}</h2>
      <p className='text-xs'>{photo.createdAt}</p>
    </article>
  );
};

export default PhotoSmallCard;
