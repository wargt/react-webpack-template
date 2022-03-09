import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useOutsideClick from '@/hooks/useOutsideClick';

function Counter({
  min = 0, max, count, onChange,
}) {
  const inputRef = useRef();
  const setValue = (value) => {
    inputRef.current.value = value;
  };

  const updateCount = (value) => {
    let newCount = parseInt(value, 10);

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(newCount)) {
      newCount = 0;
    } if (value > max) {
      newCount = max;
    } else if (value < min) {
      newCount = min;
    }

    if (count !== newCount) {
      onChange(newCount);
    }

    setValue(newCount);
  };

  const inc = () => updateCount(count + 1);
  const dec = () => updateCount(count - 1);
  const onBlur = (e) => updateCount(e.target.value);

  useOutsideClick(inputRef, () => {
    // console.log('not clicked input')
  });

  useEffect(() => setValue(count), [count]);
  useEffect(() => updateCount(count), [min, max]);

  return (
    <div style={{ display: 'flex' }}>
      <button type="button" onClick={dec} disabled={count <= min}>-</button>
      <input type="text" defaultValue={count} onBlur={onBlur} ref={inputRef} />
      <button type="button" onClick={inc} disabled={count >= max}>+</button>
    </div>
  );
}

Counter.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

Counter.displayName = 'Counter';

export default Counter;
