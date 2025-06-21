import { cn } from '@/utils/cn';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'disabled';
  className?: string;
}

const variantStyle: Record<string, string> = {
  primary: 'bg-primary-default text-white hover:bg-primary-default/90 transition-colors',
  secondary: 'border border-primary-default hover:bg-primary-lighter text-primary-default ',
  danger: 'bg-danger text-white hover:bg-danger/90 transition-colors',
  disabled: 'bg-primary-lighter text-gray-200 cursor-not-allowed',
} as const;

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', className }) => {
  return (
    <button
      onClick={onClick}
      className={cn('text-body2 w-full cursor-pointer rounded-lg p-3 font-semibold', variantStyle[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
