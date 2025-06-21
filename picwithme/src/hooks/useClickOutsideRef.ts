import { useEffect, useRef } from 'react';

/**
 * 지정한 DOM 요소 외부를 클릭했을 때, 전달된 콜백 함수를 실행합니다.
 * @param handleClickOutsideRef
 * @returns 지정된 요소에 연결할 ref 객체
 */

const useClickOutsideRef = <T extends HTMLElement>(handleClickOutsideRef: () => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClickOutsideRef();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [ref, handleClickOutsideRef]);

  return ref;
};

export default useClickOutsideRef;
