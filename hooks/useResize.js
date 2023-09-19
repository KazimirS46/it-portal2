import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    setWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width < 426;
};
