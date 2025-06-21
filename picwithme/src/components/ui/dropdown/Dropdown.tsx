import { useState } from 'react';
import ArrowDownIcon from '@/assets/icons/arrowDown.svg?react';
import DropdownList from '@/components/ui/dropdown/DropdownList';
import useClickOutsideRef from '@/hooks/useClickOutsideRef';
import { cn } from '@/utils/cn';

interface DropdownProps {
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ value, options, onChange, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutsideRef<HTMLDivElement>(() => setIsOpen(false));

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleClickOption = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className={cn('relative w-full', className)}>
      <button
        onClick={handleClick}
        className='border-border flex w-full cursor-pointer items-center justify-between rounded-lg border bg-white'
      >
        <p className='text-detail text-border truncate pl-4'>{value || placeholder}</p>
        <div className='border-border border-l p-3'>
          <ArrowDownIcon />
        </div>
      </button>
      {isOpen && <DropdownList options={options} onChange={handleClickOption} />}
    </div>
  );
};

export default Dropdown;
