import Header from '@/components/ui/header/Header';
import type { ReactNode } from 'react';

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <div className='m-auto h-screen w-[480px] overflow-y-hidden border-r border-l border-[#f0f0f0]'>
      <Header />
      <main className='h-full overflow-y-auto'>{children}</main>
    </div>
  );
};

export default GlobalLayout;
