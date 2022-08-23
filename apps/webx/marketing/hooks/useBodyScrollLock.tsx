/** @format */

import { useLayoutEffect } from 'react';

export const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    const freeScroll = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = freeScroll;
    };
  }, []);
};

export default useBodyScrollLock;
