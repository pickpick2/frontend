import { cn } from '@/utils/cn';

interface AvatarProps {
  src: string;
  size?: 'sm' | 'md';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, size = 'sm', className }) => {
  return (
    <img
      src={src}
      alt='Avatar'
      className={cn('rounded-full object-cover', size === 'sm' ? 'h-8 w-8' : 'h-12 w-12', className)}
    />
  );
};

export default Avatar;
