import { useEffect, useState } from 'react';

export default function useMediaQuery(queries, values, defaultValue) {
  const match = () => values[
    queries.findIndex(
      query => typeof window !== 'undefined' && window.matchMedia(query).matches,
    )
  ] || defaultValue;
  const [value, setValue] = useState(match);

  useEffect(() => {
    const handler = () => setValue(match);
    window.addEventListener('resize', handler);

    return () => window.removeEventListener(handler);
  }, []);

  return value;
}
