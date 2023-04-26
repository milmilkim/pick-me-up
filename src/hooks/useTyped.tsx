import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

type Options = any;

export default function App(strings: string[], options?: Options) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      ...options,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
}
