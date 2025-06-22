import Header from '@/components/ui/header/Header';
import type { ReactNode } from 'react';

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <div className='m-auto flex h-screen w-full max-w-[480px] min-w-[280px] flex-col overflow-y-hidden border-r border-l border-[#f0f0f0]'>
      <Header />
      <main className='flex-1 overflow-y-auto'>{children}</main>
    </div>
  );
};

export default GlobalLayout;
