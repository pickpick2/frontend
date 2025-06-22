interface DropdownListProps {
  options: readonly string[];
  onChange: (value: string) => void;
}

// TODO: 추후 z-index 전역에서 관리
const DropdownList: React.FC<DropdownListProps> = ({ options, onChange }) => {
  return (
    <ul className='border-border divide-border absolute top-11 z-10 w-full cursor-pointer divide-y overflow-hidden rounded-lg border bg-white'>
      {options.map((option) => (
        <li key={option} onClick={() => onChange(option)} className='text-detail text-border px-3 py-2'>
          {option}
        </li>
      ))}
    </ul>
  );
};

export default DropdownList;
