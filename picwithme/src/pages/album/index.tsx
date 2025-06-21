import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import SearchBar from '@/components/ui/SearchBar';
import PeopleIcon from '@/assets/icons/people.svg?react';
import { useState } from 'react';

const Album: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = (keyword: string) => {
    console.log(keyword);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4 p-10'>
      <h1>Album Page</h1>
      <p>This is the album page content.</p>
      <Button onClick={() => {}}>로그인</Button>
      <Button variant='secondary' onClick={() => {}}>
        로그아웃
      </Button>
      <Button variant='danger' onClick={() => {}}>
        삭제
      </Button>
      <Button variant='disabled' onClick={() => {}}>
        비활성화
      </Button>

      <section className='flex w-full gap-4'>
        <SearchBar keyword={keyword} onChange={setKeyword} onSearch={handleSearch} />

        <Dropdown
          value={value}
          options={['Option 1', 'Option 2', 'Option 3']}
          onChange={(value) => setValue(value)}
          icon={<PeopleIcon />}
          placeholder='옵션을 선택하세요'
        />
      </section>
    </div>
  );
};
export default Album;
