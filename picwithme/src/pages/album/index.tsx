import Button from '@/components/ui/Button';

const Album: React.FC = () => {
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
    </div>
  );
};
export default Album;
