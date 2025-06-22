import SearchIcon from '@/assets/icons/search.svg?react';
import { cn } from '@/utils/cn';

interface SearchBarProps {
  keyword: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (keyword: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ keyword, onChange, onSearch, className }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    if (keyword.trim() === '') return;
    e.preventDefault();
    onSearch(keyword);
    onChange('');
  };

  const handleClick = () => {
    if (keyword.trim() === '') return;
    onSearch(keyword);
    onChange('');
  };

  return (
    <div className={cn('relative min-h-12 w-full', className)}>
      <input
        value={keyword}
        onChange={(e) => onChange(e.target.value)}
        onKeyUp={handleKeyDown}
        type='text'
        placeholder='검색어를 입력하세요'
        className='border-border text-detail focus:outline-primary-default placeholder:text-border h-full w-full rounded-lg border bg-white px-3'
      />
      <button onClick={handleClick} className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer bg-white'>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
