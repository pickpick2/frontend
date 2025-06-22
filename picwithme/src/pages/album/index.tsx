import Dropdown from '@/components/ui/dropdown/Dropdown';
import SearchBar from '@/components/ui/SearchBar';
import { useState } from 'react';

const Album: React.FC = () => {
  const [value, setValue] = useState<string>('최신순');
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = (keyword: string) => {
    console.log(keyword);
  };

  return (
    <div className='flex flex-col gap-4 p-3'>
      <div className='flex w-full gap-3'>
        <SearchBar keyword={keyword} onChange={setKeyword} onSearch={handleSearch} className='flex-2' />
        <Dropdown
          value={value}
          options={['최신순', '오래된순']}
          onChange={(value) => setValue(value)}
          className='flex-1'
        />
      </div>

      <section></section>
    </div>
  );
};
export default Album;
