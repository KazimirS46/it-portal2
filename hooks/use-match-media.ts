import { useState, useLayoutEffect, useEffect } from 'react';

const queries = [
  '(max-width: 425px)',
  '(min-width: 426px) and (max-width: 768px)',
  '(min-width: 769px)',
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => window.matchMedia(query));
  const getValues = () => mediaQueryLists.map((mql) => mql.matches);
  const [values, setValues] = useState(getValues);
  useLayoutEffect(() => {
    const handler = () => setValues(getValues);
    mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));
    return () =>
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener('change', handler)
      );
  });
  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
