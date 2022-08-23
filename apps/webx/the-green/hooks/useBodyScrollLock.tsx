import { useLayoutEffect } from 'react';

export const useBodyScrollLock = (minWidth?: number) => {
  useLayoutEffect(() => {
    if (window.innerWidth > minWidth) return;

    const freeScroll = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = freeScroll;
    }
  }, []);
};

export default useBodyScrollLock;
