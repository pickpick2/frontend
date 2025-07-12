import type { Image } from '@/types/image';
import { useState } from 'react';

interface CarouselProps {
  imageList: Image[];
}

const Carousel = ({ imageList }: CarouselProps) => {
  const [crntIdx, setCrntIdx] = useState(0);

  return (
    <div className='flex w-full flex-col items-center gap-5'>
      <div className='flex w-10/12 items-center gap-5'>
        <button onClick={() => setCrntIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1))}>&lt;</button>
        <div className='relative w-full overflow-hidden'>
          <div
            className='flex transition-transform duration-300 ease-in-out'
            style={{
              width: `${imageList.length * 100}%`,
              transform: `translateX(-${crntIdx * (100 / imageList.length)}%)`,
            }}
          >
            {imageList.map((img, idx) => (
              <img
                key={img.id}
                src={img.imageUrl}
                alt={`${idx}_이미지`}
                className='flex-none object-cover'
                style={{ width: `${100 / imageList.length}%` }}
              />
            ))}
          </div>
        </div>
        <button onClick={() => setCrntIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1))}> &gt; </button>
      </div>
      <div className='flex w-full flex-row items-center justify-center gap-10'>
        {imageList.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setCrntIdx(idx)}
            className={`h-4 w-4 rounded-full ${idx === crntIdx ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
