interface InputIdProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputIdProps> = ({ value, placeholder, onChange }) => {
  return (
    <div className='relative'>
      <input
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className='w-full border-b border-gray-300 py-2 text-sm placeholder-gray-400 focus:outline-none'
      />
    </div>
  );
};

export default Input;
