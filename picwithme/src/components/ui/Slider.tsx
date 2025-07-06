import { cn } from '@/utils/cn';
import * as SliderPrimitive from '@radix-ui/react-slider';

interface SliderProps {
  onChange: (value: number[]) => void;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ onChange, defaultValue = 4, min = 1, max = 20, step = 1, className }) => {
  return (
    <SliderPrimitive.Root
      className={cn('relative flex h-10 w-full touch-none items-center select-none', className)}
      onValueCommit={onChange}
      defaultValue={[defaultValue]}
      min={min}
      max={max}
      step={step}
    >
      <SliderPrimitive.Track className='bg-primary-light relative h-3 w-full grow rounded-full'>
        <SliderPrimitive.Range className='bg-primary-default absolute h-full rounded-full' />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className='block' aria-label='굵기 조절' />
    </SliderPrimitive.Root>
  );
};

export default Slider;
