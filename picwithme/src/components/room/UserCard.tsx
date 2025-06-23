import Avatar from '@/components/ui/Avatar';
import type { UserInRoom } from '@/types/room';
import CrownIcon from '@/assets/icons/crown.svg?react';
import { cn } from '@/utils/cn';

interface UserCardProps {
  user: UserInRoom;
}

const UserCard: React.FC<UserCardProps> = ({ user: { name, img, isHost, isReady } }) => {
  return (
    <div
      className={cn(
        'w-full rounded-2xl border-3 p-0.5 transition-colors',
        isReady ? 'border-primary-default' : 'border-white'
      )}
    >
      <div className='border-primary-light bg-primary-lighter flex items-center justify-between gap-4 rounded-xl border p-3'>
        <div className='relative mr-6 shrink-0'>
          <Avatar src={img} />
          {isHost && <CrownIcon className='absolute -right-1 -bottom-1' />}
        </div>

        <p className='text-body2 truncate font-semibold text-gray-800'>{name}</p>

        <ReadyBadge isReady={isReady} />
      </div>
    </div>
  );
};

export default UserCard;

const ReadyBadge: React.FC<{ isReady: boolean }> = ({ isReady }) => {
  return (
    <span className={cn('bg-primary-default rounded-full px-2 py-0.5 text-xs text-white', !isReady && 'invisible')}>
      ready
    </span>
  );
};
