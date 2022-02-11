import React, { useEffect, useRef, useContext } from 'react'
import PropTypes from 'prop-types';
import useOutsideClick from '@/hooks/useOutsideClick'

function Counter ({ min = 0, max, count, onChange }) {
  const inputRef = useRef()
  const inc = () => updateCount(count + 1)
  const dec = () => updateCount(count - 1)
  const onBlur = (e) => updateCount(e.target.value)
  const setValue = value => inputRef.current.value = value

  useOutsideClick(inputRef, () => {
    // console.log('not clicked input')
  })

  const updateCount = value => {
    let newCount = parseInt(value)

    if (isNaN(newCount)) {
      newCount = 0
    } if (value > max) {
      newCount = max
    } else if (value < min) {
      newCount = min
    }

    if (count !== newCount) {
      onChange(newCount)
    }

    setValue(newCount)
  }

  useEffect(() => setValue(count), [count])
  useEffect(() => updateCount(count), [min, max])

  return <div style={{display: 'flex'}}>
    <button onClick={dec} disabled={count <= min}>-</button>
    <input type="text" defaultValue={count} onBlur={onBlur} ref={inputRef} />
    <button onClick={inc} disabled={count >= max}>+</button>
  </div>
}

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Counter
