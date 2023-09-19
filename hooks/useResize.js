import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(426);

  const handleResize = () => {
    setWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width < 426;
};
