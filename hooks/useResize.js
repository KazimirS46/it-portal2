import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth);

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
