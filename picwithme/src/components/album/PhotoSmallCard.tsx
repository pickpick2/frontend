import Dialog from '@/components/ui/Dialog';
import type { Photo } from '@/types/album';
import { Clock, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface PhotoSmallCardProps {
  photo: Photo;
}

const PhotoSmallCard: React.FC<PhotoSmallCardProps> = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    // TODO: 사진 삭제 로직 추가
  };

  return (
    <article>
      <img src={photo.img} alt={photo.title} className='w-full cursor-pointer rounded-lg object-cover' />
      <div className='mt-2 flex items-center justify-between'>
        <h2 className='text-detail font-semibold'>{photo.title}</h2>
        <Trash2 size={14} onClick={() => setIsOpen(true)} className='text-danger cursor-pointer' />
      </div>
      <div className='mt-0.5 flex items-center gap-1'>
        <Clock size={11} color='gray' />
        <p className='text-xs text-gray-500'>{photo.createdAt}</p>
      </div>

      {isOpen && (
        <Dialog onConfirm={handleDelete} onClose={() => setIsOpen(false)} confirmText='삭제' variant='danger'>
          <div className='flex flex-col items-center gap-2 p-2'>
            <h2 className='text-heading4 font-semibold'>사진을 삭제하시겠습니까?</h2>
            <p className='text-detail'>해당 작업을 되돌릴 수 없습니다.</p>
          </div>
        </Dialog>
      )}
    </article>
  );
};

export default PhotoSmallCard;
