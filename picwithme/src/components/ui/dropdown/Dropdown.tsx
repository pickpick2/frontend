import { useState } from 'react';
import ArrowDownIcon from '@/assets/icons/arrowDown.svg?react';
import DropdownList from '@/components/ui/dropdown/DropdownList';
import useClickOutsideRef from '@/hooks/useClickOutsideRef';
import { cn } from '@/utils/cn';

interface DropdownProps {
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ value, options, onChange, icon, placeholder, className }) => {
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
    <div ref={ref} className={cn('relative min-h-12 w-full', className)}>
      <button
        onClick={handleClick}
        className='border-border flex h-full w-full cursor-pointer items-center justify-between rounded-lg border bg-white'
      >
        <span className='flex items-center gap-2 px-3'>
          {icon}
          <p className='text-detail text-border truncate'>{value || placeholder}</p>
        </span>
        <div className='border-border flex h-full items-center justify-center border-l p-2.5'>
          <ArrowDownIcon />
        </div>
      </button>
      {isOpen && <DropdownList options={options} onChange={handleClickOption} />}
    </div>
  );
};

export default Dropdown;
