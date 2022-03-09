import { useEffect } from 'react';

export default (targetElement, callback) => {
  const onClick = (e) => {
    if (!e.path.find((el) => el === targetElement.current)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);
};
