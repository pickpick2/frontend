import Portal from '@/components/Portal';
import Button from '@/components/ui/Button';
import type { ButtonVariant } from '@/types/common';
import { X } from 'lucide-react';

interface DialogProps {
  children: React.ReactNode;
  onConfirm: () => void;
  onClose: () => void;
  confirmText?: string;
  variant?: ButtonVariant;
}

const Dialog: React.FC<DialogProps> = ({ children, onConfirm, onClose, confirmText = '확인', variant = 'primary' }) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Portal>
      <div className='bg-overlay absolute top-0 left-0 z-30 flex h-screen w-full items-center justify-center'>
        <div className='flex min-w-80 flex-col items-center justify-center rounded-lg bg-white p-4 drop-shadow-md'>
          <div className='flex w-full justify-end' onClick={onClose}>
            <X className='cursor-pointer' />
          </div>

          {children}

          <div className='flex w-full gap-3 pt-4'>
            <Button onClick={onClose} variant='cancel'>
              취소
            </Button>
            <Button variant={variant} onClick={handleConfirm}>
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Dialog;
