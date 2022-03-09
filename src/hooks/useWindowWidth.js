import { useState, useEffect } from 'react';

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export default () => {
  const [size, setSize] = useState(getSize());
  const onResize = () => setSize(getSize());

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return size;
};
