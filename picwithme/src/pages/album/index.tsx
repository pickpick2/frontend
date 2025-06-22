import PhotoSmallCard from '@/components/album/PhotoSmallCard';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import SearchBar from '@/components/ui/SearchBar';
import { albumData } from '@/mocks/data/album';
import { useState } from 'react';

const Album: React.FC = () => {
  const [value, setValue] = useState<string>('최신순');
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = (keyword: string) => {
    console.log(keyword);
  };

  return (
    <div className='flex h-full flex-col gap-4 p-3 pb-0'>
      <div className='flex w-full gap-3'>
        <SearchBar keyword={keyword} onChange={setKeyword} onSearch={handleSearch} className='flex-2' />
        <Dropdown
          value={value}
          options={['최신순', '오래된순']}
          onChange={(value) => setValue(value)}
          className='flex-1'
        />
      </div>

      <section className='grid flex-1 grid-cols-2 gap-3 overflow-y-auto'>
        {albumData.map((photo) => (
          <PhotoSmallCard key={photo.id} photo={photo} />
        ))}
      </section>
    </div>
  );
};
export default Album;
