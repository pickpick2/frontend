import { useLocation } from 'react-router';
import type { ReactNode } from 'react';
import { TitleHeader } from '@/components/ui/header/HeaderContent';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const headerMap: Record<string, ReactNode> = {
    '/album': <TitleHeader title='내 앨범' />,
    // '/other': <TitleHeader title='다른 페이지' />,
  };

  const header = headerMap[pathname] ?? null;

  return header;
};

export default Header;
