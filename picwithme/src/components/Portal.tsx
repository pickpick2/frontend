import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 서버 환경에서는 null을 반환
  if (typeof window === 'undefined') {
    return null;
  }

  const dialogContainer = document.getElementById('dialog-container');
  return dialogContainer ? createPortal(children, dialogContainer) : null;
};

export default Portal;
