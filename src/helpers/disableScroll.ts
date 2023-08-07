import { useLayoutEffect } from 'react';

export const useLockBodyScroll = (isHidden: boolean) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (!isHidden) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isHidden]);
};
