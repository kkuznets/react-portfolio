import { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useMeasure() {
  const ref = useRef();
  const [bounds, setBounds] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => setBounds(entry.contentRect)),
  );

  useEffect(() => (ro.observe(ref.current), ro.disconnect), []);

  return [{ ref }, bounds];
}
