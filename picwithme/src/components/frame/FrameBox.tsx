import { useState } from 'react';
import { FrameData } from '@/mocks/data/frame'; // 위에 준 데이터
import { cn } from '@/utils/cn';
import Avatar from '../ui/Avatar';

const FrameBox = () => {
  const [selectedId, setSelectedId] = useState<string | null>('1');

  return (
    <div className='relative grid w-11/12 shrink grid-flow-col grid-rows-3 justify-center gap-10'>
      {FrameData.map((frame) => {
        const isSelected = selectedId === frame.id;
        return (
          <div
            key={frame.id}
            onClick={() => setSelectedId(frame.id)}
            className={cn(
              'relative h-fit w-fit cursor-pointer transition-all duration-150',
              frame.name === 'frame1x4' ? 'row-span-3' : ''
            )}
          >
            {/* my pick 표시 */}
            {isSelected && (
              <div className='text-primary-default absolute -top-5 right-0 flex items-center gap-1 text-sm font-bold'>
                my pick
                <div className='bg-primary-default flex h-5 w-5 items-center justify-center rounded-full text-white'>
                  ✓
                </div>
              </div>
            )}

            {/* 프레임 이미지 */}
            <img
              src={frame.img}
              alt={`frame-${frame.id}`}
              className={cn(
                'h-auto w-[180px] bg-black object-contain',
                isSelected ? 'border-primary-default border-4' : ''
              )}
            />

            {/* 유저 아바타 리스트 */}
            <div className='mt-[-20px] flex items-center justify-end gap-[-6px]'>
              {frame.userList.slice(0, 3).map((user) => (
                <Avatar size='sm' key={user.id} src={user.img} />
              ))}
              {frame.userList.length > 3 && (
                <div className='bg-primary-default flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white'>
                  +{frame.userList.length - 3}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FrameBox;
